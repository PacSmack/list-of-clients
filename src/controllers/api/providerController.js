const router = require('express').Router();
const { Provider } = require('../../models');

// GET /api/providers
router.get('/', (req, res) => {
    Provider.findAll({
        attributes: [
            'providerName'
        ],
        
    })
        .then(dbProviderData => res.json(dbProviderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/providers
router.post('/', (req, res) => {
    Provider.create({
        providerName: req.body.providerName        
    })
        .then(dbProviderData => res.json(dbProviderData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;