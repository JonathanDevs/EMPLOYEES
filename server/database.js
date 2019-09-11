const mongoose =require('mongoose');

const URI = 'mongodb://localhost/mean-employees';


mongoose.connect('URI')
    .then(db => console.log('DB is conect'))
    .catch(err => console.error(err));

module.exports = mongoose;