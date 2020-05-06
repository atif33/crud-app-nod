const Product = require('../models/Product');

exports.findProduct = (req, res, next) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.status(200).json({product: product}))
        .catch(error => res.status(404).json({error}))};

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(product => res.status(200).json({products: product}))
        .catch(error => res.status(404).json({error}));
};

exports.createProduct = (req, res, next) => {
    console.log(req.body);
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(product => res.status(201).json({product}))
        .catch(error => res.status(400).json({error}));

};

exports.updatProduct = (req, res, next) => {
    console.log('herer33');
    Product.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(201).json({ message: 'Modified!'}))
        .catch((error) => req.status(404).json(error));
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id})
        .then(() => res.status(201).json({message: 'Deleted'}))
        .catch((error) => req.status(418).json(error))
};
