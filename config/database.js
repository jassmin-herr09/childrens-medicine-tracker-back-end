const mongoose = require('mongoose');
const db = mongoose.connection; // this is an object,

mongoose.connect(process.env.DATABASE_URI, {
 useNewUrlParser: true,
 useCreateIndex: true, // so info can be located alot faster
 useFindAndModify: false, // older method frm mongoose
 useUnifiedTopology: true, 


});

db.on('connected', () => {
    console.log(`Connected to MongoDb on ${db.host}:${db.port}`);
});