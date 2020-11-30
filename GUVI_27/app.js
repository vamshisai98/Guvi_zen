const express = require('express')
const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID

const app = express()
const dbURL = "mongodb://127.0.0.1:27017"

app.use(express.json())

app.get("/", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("studentDetails")
        let data = await db.collection("users").find().toArray()
        res.status(200).json({
            data
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.post("/add-user", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL);
        let db = clientInfo.db("studentDetails");
        let data = await db.collection("users").insertOne(req.body);
        res.status(200).json({
            message: "User created"
        });
        clientInfo.close();
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});


app.get("/get-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("studentDetails")
        let data = await db.collection("users").findOne({
            _id: objectId(req.params.id)
        })
        res.status(200).json({
            data
        })
        clientInfo.close()

    } catch (error) {
        console.log(error)
        res.send(500)
    }
})


app.put("/edit-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("studentDetails")
        let data = await db.collection("users").updateOne({
            _id: objectId(req.params.id)
        }, {
            $set: req.body
        }, )
        res.status(200).send({
            message: "user updated"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.delete("/delete-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("studentDetails")
        let data = await db.collection("users").deleteOne({
            _id: objectId(req.params.id)
        })
        res.status(200).send({
            message: "user deleted"
        })
        clientInfo.close()

    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.listen(3000, () => console.log("your app runs with port: 3000"));