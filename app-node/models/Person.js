const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

module.exports = mongoose.model('Person', personSchema);
