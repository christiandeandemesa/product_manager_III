const {Product} = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err));
}