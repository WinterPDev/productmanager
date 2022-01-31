const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB Successfully!'))
    .catch(err => console.log('Connection failed.', 
err));