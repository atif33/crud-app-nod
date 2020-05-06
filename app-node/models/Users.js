const mongoss = require('mongoose');

const userSchema = mongoss.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoss.model('Users', userSchema);
