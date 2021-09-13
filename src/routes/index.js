const clientController = require('../controllers/clientController');

const routes = [
    {
        method: 'GET',
        url: '/api/clients',
        handler: clientController.getClients
    },
    {
        method: 'POST',
        url: 'api/clients',
        handler: clientController.addClient,
        schema: documentation.addClientSchema
    },
    {
        method: 'PUT',
        url: 'api/clients/:id',
        handler: clientController.updateClient
    },
    {
        method: 'DELETE',
        url: 'api/clients/:id',
        handler: clientController.deleteClient
    },
];

module.exports = routes;