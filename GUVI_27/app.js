const express = require('express')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
const cors = require('cors')

const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())



const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

// GET all student details
app.get("/students", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("students").find().toArray()
        res.status(200).json(data)
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})


//POST student details
app.post("/add-student", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL);
        let db = clientInfo.db("student-mentor-details");
        let data = await db.collection("students").insertOne(req.body);
        res.status(200).json({
            message: "Student created"
        });
        clientInfo.close();
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});

//GET student details by name
app.get("/get-student/:name", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("students").findOne({
            name: req.params.name
        })
        res.status(200).json(data)
        clientInfo.close()

    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

//Edit student details by id
app.put("/edit-student/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("students").updateOne({
            _id: objectId(req.params.id)
        }, {
            $set: req.body
        }, )
        res.status(200).send({
            message: "Student updated"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

//Delete student details by id
app.delete("/delete-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("students").deleteOne({
            _id: objectId(req.params.id)
        })
        res.status(200).send({
            message: "Student deleted"
        })
        clientInfo.close()

    } catch (error) {
        console.log(error)
        res.send(500)
    }
})






//get mentors
app.get("/mentors", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").find().toArray()
        res.status(200).json(data)
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})


//POST mentor details
app.post("/add-mentor", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL);
        let db = clientInfo.db("student-mentor-details");
        let data = await db.collection("mentors").insertOne(req.body);
        res.status(200).json({
            message: "mentor created"
        });
        clientInfo.close();
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});

//GET mentor details by id
app.get("/get-mentor/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").findOne({
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

//Edit mentor details by id
app.put("/edit-mentor/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").updateOne({
            _id: objectId(req.params.id)
        }, {
            $set: req.body
        }, )
        res.status(200).send({
            message: "mentor updated"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

//Delete mentor details by id
app.delete("/delete-mentor/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").deleteOne({
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



//Assign a student to a mentor
app.put("/assignStudent", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").updateOne({
            name:req.body.mentor
        }, {
            $push:{"students": req.body.student} 
        }, )
        res.status(200).send({
            message: "Student assigned"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

//assign mentor to student

app.put("/assignMentor", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("students").updateOne({
            name:req.body.student
        }, {
            $set:{"mentor": req.body.mentor} 
        }, )
        res.status(200).send({
            message: "mentor assigned"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

//alter Students

app.put("/alterStudent", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("mentors").updateOne({
            name:req.body.mentorPrev
        }, {
            $pull:{"students": req.body.student} 
        }, )
        res.status(200).send({
            message: "Student updated"
        })
        clientInfo.close()
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})


app.listen(3000, () => console.log("your app runs with port: 3000"));