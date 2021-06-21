const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:123@cluster0.cfwto.mongodb.net/test', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./student.model');