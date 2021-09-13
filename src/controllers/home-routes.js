const router = require('express').Router();
const { Client, Provider } = require('../models');

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
        .then(dbClientData => {
            const clients = dbClientData.map(client => client.get({ plain: true }));
            res.render('homepage', {
                clients
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;