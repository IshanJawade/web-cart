const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/webkart?retryWrites=true&w=majority";
//const mongoURI = "mongodb://localhost:27017/webkart";

const loadData = async () => { // load data from db to backend
    const fetched_data = mongoose.connection.db.collection("items");
        await fetched_data.find({}).toArray(function (err, data){
            const fetched_cat = mongoose.connection.db.collection("category");
            fetched_cat.find({}).toArray(function (err, cat){
                if(err) {
                    console.log(err);
                }
                else {
                    global.items = data;
                    global.categories = cat;
                }
            })
        })
        const fetched_blog = mongoose.connection.db.collection("blogs");
        await fetched_blog.find({}).toArray(function (err, blogs){
                if(err){
                    console.log(err);
                } else {
                    global.blogs = blogs;
                }
            }
        )
}

const mongoDB = async () => {
    await mongoose.connect( mongoURI,
        {useNewUrlParser: true}, async (err, result) => {
            if(err) console.log(err)
            else {
                console.log("MongoDB connected");
                loadData();
            }
        }

    )
}


module.exports = mongoDB;