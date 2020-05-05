const express = require('express');
const Person = require('./models/Person');
const Product = require('./models/Product');
const app = express();
const mongoss = require('mongoose');
const bodyParser = require('body-parser');


mongoss.connect('mongodb+srv://atif3:tototata@cluster0-ur9ex.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion sà MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongsoDB échouée !' + error));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    const person = new Person({
        ...req.body
    });
    person.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

app.use('/api/stuff', (req, res, next) => {
    Person.find()
        .then(person => res.status(200).json(person))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff/:age', (req, res, next) => {
    Person.findOne({ age: req.params.age })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

app.use('/api/products', (req, res, next) => {
    Person.find()
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({ error }));
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            id: 12,
            name: 'atif',
            age: 28
        },
        {
            id: 13,
            name: 'chaimae',
            age: 23
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;

