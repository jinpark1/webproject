require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const userController = require('./controllers/user_controller');
const forumController = require('./controllers/forum_controller');
const nodeMailerController = require( './controllers/nodeMailer_controller');
const cloudinaryController = require('./controllers/cloudinary_controller');

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

const port = 4001;
const server = app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );

//hosting
app.use(express.static(`${__dirname}/../build`));

// User endpoints.
app.post('/api/register', userController.register)
app.post('/api/login', userController.login)
app.put('/api/user/:id', userController.editUser)
app.delete(`/api/deleteuser/:id`, userController.deleteUser)
app.post('/api/logout', userController.logout)
app.get('/api/checkSession', userController.checkSession)

// Forums endpoints.
app.get('/api/threads/:id', forumController.getThreads)
app.get('/api/post/:id', forumController.getThreadById)
app.get('/api/threads/:id/:category', forumController.threadsByCategory)
app.post('/api/threads', forumController.postThread)
app.put('/api/threads/:id', forumController.editThread)
app.delete('/api/deletePost/:id', forumController.deleteThread)
app.get('/api/reply/:id', forumController.getThreadReplies)
app.post('/api/reply', forumController.postThreadReplies)

// NodeMailer
app.post('/api/sendmail', nodeMailerController.sendMail);

// Cloudinary image upload
app.get('/api/cloud', cloudinaryController.upload);

// Hosting zeit
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

// Socket
var socket = require('socket.io');
var messages = [];
var usersSignedIn = [];

const io = socket(server);

//displaying users signed in to chat.
io.on('connection', (socket) => {
    socket.on('SEND_USER', function(data){
        usersSignedIn.push(data)
        io.emit('RECEIVE_USER', usersSignedIn);
    })
});

//sending and receiving messages
io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        messages.push(data)
        io.emit('RECEIVE_MESSAGE', messages);
    })
});

