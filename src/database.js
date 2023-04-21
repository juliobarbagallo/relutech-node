import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/acme", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB connected'))
    .catch(error => console.log(error))