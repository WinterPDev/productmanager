const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Title is Required'],
        minlength: [2, 'Title must be 2 characters or more']
    },
    Price: {type: Number,
    required: [true, 'Price is Required'],
    min: [1, 'Price must not be 0.']
    }
});

module.exports.Product = mongoose.model('Product', ProductSchema);