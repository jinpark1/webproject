const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
const bcrypt = require('bcrypt');
const app = express();
const saltRounds = 12;

app.use(bodyParser.json());
require('dotenv').config();

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

app.use(express.static(`${__dirname}/../build`));

app.post('/api/register', (req, res) => {
    const db = app.get('db');
    const { email, onlineID, password, firstName, lastName, created, admin } = req.body;
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        db.create_user({
            email: email,
            online_id: onlineID,
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName,
            created: created,
            admin: admin
        }).then(() => {
            req.session.user = { onlineID };
            res.json({ user: req.session.user })
        }).catch(error => {
            res.status(500).json({ message: 'Error has occured!' })
        });
    });
});

app.post('/api/login', (req, res) => {
    const db = app.get('db')
    const { email, password } = req.body;
    db.login_user({email: email}).then(users => {
        if(users.length) {
            bcrypt.compare(password, users[0].password).then(doPasswordsMatch => {
                if (doPasswordsMatch) {
                    req.session.user = { username: users[0].username };
                    res.json({ user: req.session.user });
                    console.log("I'm IN")
                } else {
                    res.status(403).json({ message: 'Wrong Password' });
                }
            });
        } else {
            res.status(403).json({ message: "That user is not registered" });
        }
    });
});

app.get('/api/threads', (req, res) => {
    const db = app.get('db')
    db.read_threads()
    .then( threads => res.status(200).send(threads) )
    .catch( () => res.status(500).send() );
})

app.post('/api/threads', (req, res) => {
    const data = req.body;
    const db = app.get('db');
    db.create_thread({
        subject: data.subject,
        content: data.content,
        category: data.category,
        created: data.created
    }).then( res => {
        res.json(results);
    }).catch( error => {
        res.json({ message: 'Error occured while posting.' })
    })
})

app.get('/api/post/:id', (req, res) => {
    const { id } = req.params;
    const db = app.get('db');
    db.read_post({
        thread_id: id
    })
    .then( post => res.status(200).send( post ))
    .catch( () => res.status(500).send() );
})


//for hosting zeit
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 4001;
app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );