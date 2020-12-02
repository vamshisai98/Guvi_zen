const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const bcrypt = require('bcrypt')

const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID
const nodemailer = require("nodemailer");
const app = express()
require("dotenv").config();
app.use(express.json())
app.use(cors())


const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

app.get("/users", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
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


//POST student details
app.post("/add-user", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL);
        let db = clientInfo.db("student-mentor-details");
        let data = await db.collection("users").insertOne(req.body);
        res.status(200).json({
            message: "Student created"
        });
        clientInfo.close();
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});

//GET student details by id
app.get("/get-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
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

//Edit student details by id
app.put("/edit-user/:id", async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let data = await db.collection("users").updateOne({
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
        let data = await db.collection("users").deleteOne({
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


app.post('/register', async (req, res) => {

    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let result = await db.collection("users").findOne({
            email: req.body.email
        })
        if (result) {
            res.status(400).json({
                message: 'User already exist'
            })
            clientInfo.close()

        } else {
            let salt = await bcrypt.genSalt(15)
            let hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash
            await db.collection("users").insertOne(req.body);
            res.status(200).json({
                message: "User registered"
            });
            clientInfo.close()
        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/login', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let result = await db.collection("users").findOne({
            email: req.body.email
        })
        if (result) {
            let isTrue = await bcrypt.compare(req.body.password, result.password)
            if (isTrue) {
                res.status(200).json({
                    message: 'user login sucessful'
                })

            } else {
                res.status(200).json({
                    message: "Login unsuccessful"
                });
            }
        } else {
            res.status(400).json({ message: "User not registered" });
        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/forgetpassword',async(req,res)=>{

    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db =  clientInfo.db("student-mentor-details")
        let result = await db.collection("users").findOne({email:req.body.email})
        
        if (result) {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: 'vamshianirudhtest@gmail.com', // generated ethereal user
                  pass: 'vamshi@123', // generated ethereal password
                },
              });
            
            
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: 'vamshianirudhtest@gmail.com', // sender address
                    to:  'saivamshianirudh136@gmail.com', // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: "<b>Hello world?</b>", // html body
                  });

            res.status(200).json({message:"user exits"})
            clientInfo.close()
        } else {
            res.status(400).json({message:"user doesn't exit"})
            
        }
        
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => console.log("your app runs with port: 3000"));


