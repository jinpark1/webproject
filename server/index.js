require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => { app.set('db', database); });

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        //one week
        maxAge: 60 * 60 * 24 * 7 * 1000
    }
}));

// app.use(express.static(`${__dirname}/../build`));

// Registering a user
// app.post('/api/register', (req, res) => {
//     console.log('---register',req.body)
//     const db = app.get('db');
//     const { email, onlineID, password, firstName, lastName, created, admin } = req.body;
//     bcrypt.hash(password, saltRounds).then(hashedPassword => {
//         db.create_user({
//             email: email,
//             online_id: onlineID,
//             password: hashedPassword,
//             first_name: firstName,
//             last_name: lastName,
//             created: created,
//             admin: admin
//         }).then((users) => {
//             console.log('index.js---register---', users)
//             req.session.user = users[0];
//             res.json({ user: req.session.user })
//         }).catch(error => {
//             res.status(500).json({ message: 'The email or online ID is already in use.' })
//         });
//     });
// });

// Register a user
const userController = require('./controllers/user_controller')
app.post('/api/register', userController.register)

// Logging in user and sending user data back.
app.post('/api/login', (req, res) => {
    const db = app.get('db')
    const { email, password } = req.body;
    db.login_user({email: email}).then(users => {
        console.log('users---', users)
        if(users.length) {
            bcrypt.compare(password, users[0].password).then(doPasswordsMatch => {
                if (doPasswordsMatch) {
                    req.session.user =  users[0];
                    res.json({ user: req.session.user });
                } else {
                    res.status(403).json({ message: 'Wrong Password' });
                }
            });
        } else {
            res.status(403).json({ message: "That user is not registered" });
        }
    });
});

// Edit user information
app.put('/api/user/:id', (req,res) => {
    const db = req.app.get('db')
    const { onlineID, firstName, lastName, email, profilePhoto } = req.body;
    const { id } = req.params;
    db.edit_user({
        online_id: onlineID,
        first_name: firstName,
        last_name: lastName,
        email: email,
        id: id,
        profile_photo: profilePhoto
    }).then((users) => {
        console.log('index.js----edit', users)
        req.session.user = users[0];
        res.json({ user: req.session.user })
    }).catch(error => {
        res.status(500).json({ message: 'Error occurerd while editing user.'})
    })
})

// Delete user and all threads and replys made by the user.
app.delete(`/api/deleteuser/:id`, (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params;
    console.log('params', id)
    db.delete_user({
        id: id
    }).then( results => {
        console.log('results')
        req.session.destroy();
        res.json(results);
    }).catch( error => {
        res.status(500).json({ message: 'Error occured while deleting user.' })
    })
})

// Get 20 thread posts all
app.get('/api/threads/:id', (req, res) => {
    // console.log('test----------5-',res.body)
    console.log('test-----7-', req.params.category)
    // console.log('req')
    const db = req.app.get('db')
    const { id } = req.params;
    db.read_threads20({
        value: id,
    })
    .then( threads => res.status(200).send(threads) )
    .catch( () => res.status(500).send() );
})

// Get 20 thread posts depending on categories
app.get('/api/threads/:id/:category', (req, res) => {
    // console.log('test----------5-',res.body)
    console.log('test-----7-', req.params.category)
    // console.log('req')
    const db = req.app.get('db')
    const { id, category } = req.params;
    db.read_thread20({
        value: id,
        category: category
    })
    .then( threads => res.status(200).send(threads) )
    .catch( () => res.status(500).send() );
})

// Posting a thread and getting back a response with newly made post data.
app.post('/api/threads', (req,res) => {
    const db = req.app.get('db')
    const data = req.body;
    db.create_thread({
        subject: data.subject,
        content: data.content,
        category: data.category,
        created: data.created,
        users_id: data.usersID
    }).then( (post) => res.status(200).send( post ) ).catch( () => res.status(500).send() );
})

// Get a thread POST depending on ID.
app.get('/api/post/:id', (req, res) => {
    const { id } = req.params;
    const db = app.get('db');
    db.read_post({
        thread_id: id
    })
    .then( post => res.status(200).send( post ))
    .catch( () => res.status(500).send() );
})

// Get a thread REPLY depending on ID.
app.get('/api/reply/:id', (req, res) => {
    const { id } = req.params;
    const db = app.get('db');
    db.read_reply({
        thread_id: id
    })
    .then( post => res.status(200).send( post))
    .catch( () => res.status(500).send() );
})

// post reply depnding on thread id.
app.post('/api/reply', (req, res) => {
    const data = req.body;
    const db = req.app.get('db');
    db.create_reply({
        content: data.content,
        created: data.created,
        thread_id: data.threadID,
        users_id: data.userID,
    }).then( post => {
        res.status(200).send( post );
        res.json(results);
    }).catch( error => {
        res.status(500).send();
        res.json({ message: 'Error occured while posting.' })
    })
})

//Checks session then stores user data to redux state.
app.get('/api/checkSession', (req, res) => {
    console.log(req.session)
    res.status(200).send(req.session)
})

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send();
});

// NodeMailer
const nodeMailer_controller = require( './controllers/nodeMailer_controller');
app.post('/api/sendmail', nodeMailer_controller.sendMail);

// Cloudinary image upload
const cloudinary_controller = require('./controllers/cloudinary_controller');
app.get('/api/cloud', cloudinary_controller.upload);

// Hosting zeit
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 4001;
const server = app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );

// Socket
var socket = require('socket.io');
var messages = [];
var usersSignedIn = [];

const io = socket(server);

//displaying users signed in to chat.
io.on('connection', (socket) => {
console.log('Users List')
    socket.on('SEND_USER', function(data){
        console.log('Users-data', data)
        usersSignedIn.push(data)
        io.emit('RECEIVE_USER', usersSignedIn);
    })
});

//sending and receiving messages
io.on('connection', (socket) => {
    console.log(socket.id);
    console.log("user connected")
    socket.on('SEND_MESSAGE', function(data){
        console.log(data)
        messages.push(data)
        io.emit('RECEIVE_MESSAGE', messages);
    })
});

// io.on('connection', (socket) => {
//     console.log("second socket connected")
//     socket.on('SEND_MESSAGE', function(data){
//         messages.push(data)
//         io.emit('RECEIVE_MESSAGE', messages);
//     })
// });

// io.on('connection', (socket) => {
//     console.log("third socket connected")
//     socket.on('SEND_MESSAGE', function(data){
//         console.log(data)
//         messages.push(data)
//         io.emit('RECEIVE_MESSAGE', messages);
//     })
// });



// io.on()
