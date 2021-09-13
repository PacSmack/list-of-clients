const router = require('express').Router();

const clientRoutes = require('./clientController');
const providerRoutes = require('./providerController');


router.use('/clients', clientRoutes);
router.use('/providers', providerRoutes);


module.exports = router;
