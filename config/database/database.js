const mongoose = require('mongoose')
require('dotenv')
let conection = async() =>{
    try {
        mongoose.connect(
            process.env.DB_LINK,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }                
        )
        console.log('connected to database');
    } catch (error) {
        console.log(error.message);
    }
}

conection()