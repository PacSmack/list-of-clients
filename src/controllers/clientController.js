// get client model
const Client = require('../models/Clients');

// get all clients
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find()
        return clients
    } catch (err) {
        throw 400
    }
}

// create new client
exports.addClient = async (req, res) => {
    try {
        const client = new Client(req.body)
        return client.save()
    }
    catch (err) {
        throw 400
    }
}

// update client
exports.updateClient = async (req, res) => {
    try {
        const id = req.params.id
        const client = req.body
        const { ...updateData } = client
        const update = await Client.findByIdAndUpdate(id, updateData, { new: true })
        return update
    }
    catch (err) {
        throw 400
    }
}


// delete client
exports.deleteClient = async (req, res) => {
    try {
        const id = req.params.id
        const client = await Client.findByIdAndRemove(id)
        return client
    }
    catch (err) {
        throw 400
    }
}