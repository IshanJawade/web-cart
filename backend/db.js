const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/webcart?retryWrites=true&w=majority";


const mongoDB = async () => {
    await mongoose.connect( mongoURI,
        {useNewUrlParser: true}, async (err, result) => {
            if(err) console.log(err)
            else {
                console.log("Database connected");
                const fetched_data = mongoose.connection.db.collection("users");
                fetched_data.find({}).toArray(function (err, data){
                    if(err) console.log(err);
                    else console.log(data); 
                })
            }
        }

    )
}

module.exports = mongoDB;