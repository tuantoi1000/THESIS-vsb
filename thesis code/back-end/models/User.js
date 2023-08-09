const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: false
    },
    phone: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    password: {
        type: String,
        require: true,
        minLength: 4
    },
},
{timestamps: true});


module.exports = mongoose.model('User', userSchema);
