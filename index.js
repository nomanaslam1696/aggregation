const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
const port = 4013;
const url =  "mongodb+srv://nomanaslam1696:Nomi1696@awaantech.3jtdmrw.mongodb.net/assignment";

const postRoute = require("./Routes/seeder");
app.use("/",postRoute)

const showRoute = require("./Routes/showData");
app.use("/", showRoute);

mongoose.connect(url)
.then(()=>{
    console.log("db connected successfully");
    app.listen(port, ()=>{
        console.log(`server is running successfully on ${port} `);
    })
}).catch((error)=>{
    console.log("db not connected");
    console.log(error.message);
})