const mongoose = require('mongoose');
const validator = require('mongoose-validator');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Enter a valid email.'
            })
        ],
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }

})