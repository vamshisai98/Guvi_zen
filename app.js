const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const bcrypt = require('bcrypt')
const port = process.env.PORT || 3000

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
        res.status(200).json(data)
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
        res.status(200).json(data)
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
        console.log(result)
        if (result) {
            let isTrue = await bcrypt.compare(req.body.password, result.password)
            if (isTrue) {
                res.status(200).json({
                    message: 'user login successful'
                })

            clientInfo.close()


            } else {
                res.status(400).json({
                    message: "Login unsuccessful"
                });
            clientInfo.close()

            }
        } else {
            res.status(400).json({
                message: "User not registered"
            });
            clientInfo.close()

        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/forgetpassword', async (req, res) => {

    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("student-mentor-details")
        let result = await db.collection("users").findOne({
            email: req.body.email
        })

        if (result) {
            let randomString = (Math.random() * 1e32).toString(36)
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'vamshianirudhtest@gmail.com', // generated ethereal user
                    pass: process.env.PWD, // generated ethereal password
                },
            });


            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: 'vamshianirudhtest@gmail.com', // sender address
                to: 'saivamshianirudh136@gmail.com', // list of receivers
                subject: "Reset Password", // Subject line
                text: "Reset Password", // plain text body
                html: `<b>Click on the link to reset your password <a href="https://user-login-auth-node.herokuapp.com/authenticate/${randomString}/">Click here</a></b>`, // html body
            });

            await db.collection("users").updateOne({
                "email": req.body.email
            }, {
                $set: {
                    "randomstring": randomString
                }
            })
            res.status(200).json({
                message: "user exists, Please check your mail"
            })
            clientInfo.close()
        } else {
            res.status(400).json({
                message: "user doesn't exist"
            })

        }

    } catch (error) {
        console.log(error)
    }
})


app.get('/authenticate/:randomString', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db('student-mentor-details')
        let result = await db.collection('users').findOne({
            randomstring: req.params.randomString
        })
        if(result){

            if (result.randomstring == req.params.randomString) {
                res.redirect(`http://localhost:8000/frontend/test.html?randomstring=${req.params.randomString}`)
            } 
        }
        else{
            res.send(  '<h1>Link has expired</h1>')
        }
    } catch (error) {
        console.log(error)
    }
})

app.put('/updatePassword/:randomString', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db('student-mentor-details')
        let salt = await bcrypt.genSalt(15)
        let hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash
        let result =  await db.collection('users').updateOne({
            "randomstring": req.params.randomString
        }, {
            $set: {
                "password": req.body.password,
                "randomstring": ''
            }
        })
        if (result) {
           
            res.status(200).json({
                message: "password updated"
            })
        }
        else{
            res.status(400).json({
                message: "password updated unsuccessful  "
            })
        }
    } catch (error) {
        console.log(error)
    }
})



app.listen(port, () => console.log("your app runs with port: 3000"));