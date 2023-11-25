const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    profilePicture: {
        type: String
    },
    
},
    { timestamps: true }
)
module.exports = mongoose.model("Customer", CustomerSchema);