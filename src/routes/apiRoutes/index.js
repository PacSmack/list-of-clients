const clientController = require('../../controllers/api/clientController');

const routes = [
    {
        method: 'GET',
        url: '/api/clients',
        handler: clientController.getClients
    },
    {
        method: 'POST',
        url: '/api/clients',
        handler: clientController.addClient        
    },
    {
        method: 'PUT',
        url: '/api/client/:id',
        handler: clientController.updateClient
    },
    {
        method: 'DELETE',
        url: '/api/client/:id',
        handler: clientController.deleteClient
    },
];

module.exports = routes;