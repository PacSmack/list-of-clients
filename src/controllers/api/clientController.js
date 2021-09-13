const router = require('express').Router();
const { Client, Provider } = require('../../models');

// GET /api/clients
router.get('/', (req, res) => {
    Client.find({
        attributes: [
            '_id', 'fullName', 'email', 'phone'
        ],
        include: [
            {
                model: Provider,
                attributes: ['providerName']
            }
        ]
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// POST /api/clients
router.post('/', (req, res) => {
    Client.create({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        providers: []
    })
        .then(dbClientData => res.json(dbClientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/clients/1
router.put('/:id', (req, res) => {
    let newClient = new Client({
        _id: req.params.id,
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        providers: []
    })

    Client.findOneAndUpdate({ _id: req.params.id }, newClient, (err, client) => {
        if (err) {
            res.json({ newClient: newClient, success: false, msg: "Failed to update client" })
        } else {
            res.json({ newClient: newClient, success: true })
        }
    }
    )
});

// DELETE /api/clients/1
router.delete('/:id', (req, res) => {
    Client.findOneAndDelete({ _id: req.params.id })
        .then(dbClientData => {
            if (!dbClientData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbClientData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;