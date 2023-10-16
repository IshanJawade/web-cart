const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/webkart?retryWrites=true&w=majority";
//const mongoURI = "mongodb://localhost:27017/webkart";

const mongoDB = async () => {
    await mongoose.connect( mongoURI,
        {useNewUrlParser: true}, async (err, result) => {
            if(err) console.log(err)
            else {
                console.log("MongoDB connected");
                const fetched_data = mongoose.connection.db.collection("items");
                fetched_data.find({}).toArray(function (err, data){
                    const fetched_cat = mongoose.connection.db.collection("category");
                    fetched_cat.find({}).toArray(function (err, cat){
                        if(err) {
                            console.log(err);
                        }
                        else {
                            global.item = data;
                            global.category = cat;
                        }
                    })
                })
            }
        }

    )
}

module.exports = mongoDB;