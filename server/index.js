require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
// const bcrypt = require('bcrypt');
const app = express();

const userController = require('./controllers/user_controller')
const forumController = require('./controllers/forum_controller')

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

//hosting
app.use(express.static(`${__dirname}/../build`));

// User endpoints.
app.post('/api/register', userController.register)
app.post('/api/login', userController.login)
app.put('/api/user/:id', userController.editUser)
app.delete(`/api/deleteuser/:id`, userController.deleteUser)
app.post('/api/logout', userController.logout)
app.get('/api/checkSession', userController.checkSession)

// Get 20 thread posts all
app.get('/api/threads/:id', forumController.getThreads)

// Get a thread POST depending on ID.
app.get('/api/post/:id', forumController.getThreadById)

// Get 20 thread posts depending on categories
app.get('/api/threads/:id/:category', forumController.threadsByCategory)

// Posting a thread and getting back a response with newly made post data.
app.post('/api/threads', forumController.postThread)

app.put('/api/threads/:id', forumController.editThread)



// Get a thread REPLY depending on ID.
app.get('/api/reply/:id', forumController.getThreadReplies)

// post reply depnding on thread id.
app.post('/api/reply', forumController.postThreadReplies)


app.delete('/api/deletePost/:id', (req, res) => {
    const id = req.params.id;
    const db = req.app.get('db');
    db.delete_post({
        id: id
    }).then( post => {
        res.status(200).send( post );
    }).catch( error => {
        res.status(500).send();
    })
})



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
