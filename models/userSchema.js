const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name  : {
        type : String
    },
    email :{
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    age :{
        type : Number
    },
    salary : {
        type : Number
    }

})
const userModel =mongoose.model("aggregation", userSchema);

module.exports = userModel;