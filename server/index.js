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
}));

app.use(express.static(`${__dirname}/../build`));

app.post('/register', (req, res) => {
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

const port = 4001;
app.listen(port, () => { console.log(`Server listening on Port ${port}`)} );