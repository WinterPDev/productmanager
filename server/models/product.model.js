const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is Required'],
        minlength: [2, 'Title must be 2 characters or more']
    },
    price: {type: Number,
    required: [true, 'Price is Required'],
    min: [1, 'Price must not be 0.']
    },

    description: {type: String,
    required: [true, 'Description is Required'],
    minlength: [5, 'Description must be at least 5 characters or more']
    }
});

module.exports.Product = mongoose.model('Product', ProductSchema);