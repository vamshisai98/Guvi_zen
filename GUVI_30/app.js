require('dotenv').config();
const express = require('express')
const mongodb = require('mongodb')

const cors = require('cors')
const port = process.env.PORT || 3000

const bcrypt = require('bcrypt')
const mongoClient = mongodb.MongoClient
const objectId = mongodb.ObjectID
const nodemailer = require('nodemailer');
const {
    json
} = require('express');

const app = express()
app.use(express.json())
app.use(cors())

const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017"

app.post('/register', async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
        let result = await db.collection("users").findOne({
            email: req.body.email
        })
        if (result) {
            res.status(404).json({
                message: 'User already exists'
            })
            clientInfo.close()
        } else {
            let salt = await bcrypt.genSalt(15)
            let hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash

            let verifyString = (Math.random() * 1e32).toString(36)
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.USER_SENDER, // generated ethereal user
                    pass: process.env.PWD, // generated ethereal password
                },
            });


            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: process.env.USER_SENDER, // sender address
                to: req.body.email, // list of receivers
                subject: "Verify email to login", // Subject line
                text: "Verify email to login", // plain text body
                html: `<b>Click on the link to verify your email <a href="http://localhost:3000/confirm/${verifyString}">Click here</a></b>`, // html body
            });

            await db.collection("users").insertOne(req.body)

            await db.collection("users").updateOne({
                "email": req.body.email
            }, {
                $set: {
                    "verifystring": verifyString
                }
            })
            res.status(200).json({
                message: 'confirmation link sent'
            })
            clientInfo.close()

        }

    } catch (error) {
        console.log(error)
    }
})

app.get('/confirm/:verifyString', async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
        let result = await db.collection("users").findOne({
            verifystring: req.params.verifyString
        })
        if (result) {
            if (result.verifystring === req.params.verifyString) {
                await db.collection("users").updateOne({
                    verifystring: req.params.verifyString
                }, {
                    $set: {
                        status: true,
                        verifystring: ''
                    }
                })
                res.redirect(`http://localhost:8000/frontend/index.html?${result._id}`)
            }
            clientInfo.close()
        } else {
            res.send('<h1>Link has expired</h1>')
            clientInfo.close()
        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/login', async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
        let result = await db.collection("users").findOne({
            email: req.body.email
        })
        if (result) {

            let isTrue = await bcrypt.compare(req.body.password, result.password)
            if (isTrue) {
                res.status(200).json({
                    message: 'user login successful',
                    result
                })

            } else {
                res.status(400).json({
                    message: "User Login unsuccessful"
                });
            }
        } else {
            res.status(404).json({
                message: 'User not registered'
            })
        }
    } catch (error) {
        console.log(error)
    }
})


app.post('/forgetpassword', async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
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
                    user: process.env.USER_SENDER, // generated ethereal user
                    pass: process.env.PWD, // generated ethereal password
                },
            });


            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: process.env.USER_SENDER, // sender address
                to: req.body.email, // list of receivers
                subject: "Reset Password", // Subject line
                text: "Reset Password", // plain text body
                html: `<b>Click on the link to reset your password <a href="http://localhost:3000/verify/${randomString}">Click here</a></b>`, // html body
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


app.get('/verify/:randomString', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db('login-auth')
        let result = await db.collection('users').findOne({
            randomstring: req.params.randomString
        })
        if (result) {

            if (result.randomstring == req.params.randomString) {
                res.redirect(`http://localhost:8000/frontend/changepwd.html?randomstring=${req.params.randomString}`)
            }
        } else {
            res.send('<h1>Link has expired</h1>')
        }
    } catch (error) {
        console.log(error)
    }


})


app.put('/updatePassword/:randomString', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db('login-auth')
        let salt = await bcrypt.genSalt(15)
        let hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash
        let result = await db.collection('users').updateOne({
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
        } else {
            res.status(400).json({
                message: "password updated unsuccessful  "
            })
        }
    } catch (error) {
        console.log(error)
    }
})

app.put('/shortUrl/:id', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
        let result = await db.collection("users").findOne({
            _id: objectId(req.params.id)
        })
        if (result) {
            await db.collection("users").updateOne({
                "_id": objectId(req.params.id)
            }, {
                $push: {
                    "url": {
                        longURL: req.body.longURL,
                        shortURL: req.body.shortURL,
                        count: 0
                    }
                }
            })
            res.status(200).json({
                message: "User found, data updated",

            })
        } else {
            res.status(404).json({
                message: "User not found, data not updated"
            })
        }

    } catch (error) {
        console.log(error)
    }
})


app.get('/dashboard/:id', async (req, res) => {
    try {

        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db('login-auth')
        let result = await db.collection('users').findOne({
            _id: objectId(req.params.id)
        })
        if (result) {
            res.status(200).json(result)
        } else {
            res.send('<h1>Link has expired</h1>')
        }
    } catch (error) {
        console.log(error)
    }
})


app.get('/getLongUrl/:str', async (req, res) => {
    try {
        let clientInfo = await mongoClient.connect(dbURL)
        let db = clientInfo.db("login-auth")
        let result = await db.collection("users").findOne(

            {
                "url.shortURL": {
                    "$in": [req.params.str]
                }
            }, {
                projection: {

                    "url": {
                        $elemMatch: {
                            shortURL: req.params.str
                        }
                    }
                }
            })
        if (result) {
        
            await db.collection("users").updateOne({
                "url.shortURL": {
                    "$in": [req.params.str]
                }
            }, {
                $inc: {
                    "url.$.count": 1
                }
            })
         
            res.redirect(result.url[0].longURL)
        } else {
            res.status(400).json({
                message: "Not found url"
            })
        }
    } catch (error) {

    }
})


app.listen(port, () => console.log('your app is running in port: ', port))