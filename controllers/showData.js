const userModel = require("../models/userSchema")

const showData = async (req, res) => {
   

    const found = await userModel.aggregate([
         { $group: { 
            _id: null, 
            totalSalary: { $sum: "$salary" } ,
            averageSalary : {$avg : "$salary"}
        } }
        ]);
    if (found) {
        res.status(200).json({
            message1: "total salary paid by the company",
            totalSalary: found[0].totalSalary,
            message: "average salary paid by the company",
            averageSalary: found[0].averageSalary,
        })
    } else {
        res.status(403).send("error processing data")
    }
}
module.exports = { showData }