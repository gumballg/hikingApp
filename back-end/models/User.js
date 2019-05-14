const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unqiue: true
    },
    password: String,
    location: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;