require("dotenv").config();
const express =require("express")
const mongodb = require("mongodb")
const cors = require("cors")
const port = process.env.PORT || 3000




const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectId

const app = express()
app.use(express.json())
app.use(cors())


// app.options('*', cors()) 
// var whitelist = ['http://localhost:3000/', 'http://localhost:8000']
// var corsOptionsDelegate = function (req, callback) {
//     var corsOptions;
//     if (whitelist.indexOf(req.header('Origin')) !== -1) {
//         corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//     } else {
//         corsOptions = { origin: false } // disable CORS for this request
//     }
//     callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     if (req.method == 'OPTIONS') {
//         res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,PATCH");
//         return res.status(200).json({});
//     }
//     next();
// })
const dbURL = process.env.DB_URL 


app.get("/", async(req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("portfolio-user").find().toArray()
        res.status(200).json(data)
        
        clientInfo.close()
        
        
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.put("/edit",async(req,res)=>{
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
    
        let data = await db.collection("portfolio-user").updateOne({
            _id: objectId("5fce321555dae98fdeaf99ad")
        },
        {
            $set:req.body
        })
        
        res.status(200).send({
            message: "user updated"
        })
        
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})





app.listen(port, () => console.log("your app runs with port:",port));
