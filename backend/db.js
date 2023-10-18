const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/webkart?retryWrites=true&w=majority";
//const mongoURI = "mongodb://localhost:27017/webkart";

const mongoDB = async () => {
    await mongoose.connect( mongoURI,
        {useNewUrlParser: true}, async (err, result) => {
            if(err) console.log(err)
            else {
                console.log("MongoDB connected");
            }
        }

    )
}

module.exports = mongoDB;