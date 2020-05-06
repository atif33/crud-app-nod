const express = require('express');

const app = express();
const mongoss = require('mongoose');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');



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
app.use('/api/products', productRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;

