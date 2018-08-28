const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    
    register: (req, res) => {
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
                req.session.user = users[0];
                res.json({ user: req.session.user })
            }).catch(error => {
                res.status(500).json({ message: 'The email or online ID is already in use.' })
            });
        });
    },

    login: (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body;
        db.login_user({email: email}).then(users => {
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
    },

    editUser: (req, res) => {
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
            req.session.user = users[0];
            res.json({ user: req.session.user })
        }).catch(error => {
            res.status(500).json({ message: 'Error occurerd while editing user.'})
        });
    },

    deleteUser: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        db.delete_user({
            id: id
        }).then( results => {
            req.session.destroy();
            res.json(results);
        }).catch( error => {
            res.status(500).json({ message: 'Error occured while deleting user.' })
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    },

    checkSession: (req, res) => {
        res.status(200).send(req.session)
    }
}