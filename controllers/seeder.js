const userModel = require('../models/userSchema');
const data = require('../data/data');

const seeder = async(req,res)=>{
    await userModel.insertMany(data).then((values)=>{
        res.send(values)
    }).catch((err)=>{
        console.log(err);
        res.send(err.message)
    })
}

module.exports = {seeder}