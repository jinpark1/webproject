const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    register: (req, res) => {
        console.log('---register',req.body)
        const db = req.app.get('db');
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
            }).then((users) => {
                console.log('index.js---register---', users)
                req.session.user = users[0];
                res.json({ user: req.session.user })
            }).catch(error => {
                res.status(500).json({ message: 'The email or online ID is already in use.' })
            });
        });
    },
}