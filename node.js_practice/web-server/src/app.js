const express = require("express");
const path = require("path");
const hbs = require('hbs')

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,"../templates/partials")


app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather",
        name:"Vamshi"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About me",
        name:"Vamshi "
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        help:"this is some helpful text",
        title:"Help",
        name:"Vamshi"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast:"It is snowing",
        location:"India"
    });
});

app.get("*", (req, res) => {
  res.render('404',{
      title:404,
      name:"vamshi",
      errorMessage:"page not found"
  })
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});