const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello Model!"
    });
}

module.exports.createProduct = (req, res) => {
    const { title, price } = req.body;
    Product.create({
        title,
        price
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

