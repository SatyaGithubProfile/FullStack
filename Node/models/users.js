const Joi = require('joi');
const mongoose = require('mongoose');

const userModel = mongoose.model('Users', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email : {
        type: String,
        required:true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },

    password: {
        type : String,
        required:true,
        minlength: 5,
        maxlength: 1024
    }
}));




// To validate the user fields
function validateUser(user) {

    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    })
    return schema.validate(user);
}

exports.User = userModel;
exports.validate = validateUser;
