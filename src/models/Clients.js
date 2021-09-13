const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    providers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider'
        }
    ]
})


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;