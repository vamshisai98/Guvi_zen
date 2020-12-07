const express =require("express")
const mongodb = require("mongodb")
const cors = require("cors")
const port = process.env.PORT || 3000


const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectId

const app = express()
require("dotenv").config();
app.use(express.json())
app.use(cors())


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
