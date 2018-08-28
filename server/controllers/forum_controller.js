
module.exports = {
    getThreads: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        db.read_threads20({
            value: id,
        })
        .then( threads => res.status(200).send(threads) )
        .catch( () => res.status(500).send() );
    },

    getThreadById: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.read_post({
            thread_id: id
        })
        .then( post => res.status(200).send( post ))
        .catch( () => res.status(500).send() );
    },

    threadsByCategory: (req, res) => {
        const db = req.app.get('db')
        const { id, category } = req.params;
        db.read_thread20({
            value: id,
            category: category
        })
        .then( threads => res.status(200).send(threads) )
        .catch( () => res.status(500).send() );
    },

    postThread: (req, res) => {
        const db = req.app.get('db')
        const data = req.body;
        db.create_thread({
            subject: data.subject,
            content: data.content,
            category: data.category,
            created: data.created,
            users_id: data.usersID
        }).then( (post) => res.status(200).send( post ) ).catch( () => res.status(500).send() );
    },

    editThread: (req, res) => {
        const db = req.app.get('db')
        const data = req.body;
        db.edit_thread({
            subject: data.subject,
            content: data.content,
            category: data.category,
            id: req.params.id
        }).then( (post) => res.status(200).send( post ) )
        .catch( () => res.status(500).send() );
    },

    deleteThread: (req, res) => {
        const id = req.params.id;
        const db = req.app.get('db');
        db.delete_post({
            id: id
        }).then( post => {
            res.status(200).send( post );
        }).catch( error => {
            res.status(500).send();
        })
    },

    getThreadReplies: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.read_reply({
            thread_id: id
        })
        .then( post => res.status(200).send( post))
        .catch( () => res.status(500).send() );
    },

    postThreadReplies: (req, res) => {
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
    }
}