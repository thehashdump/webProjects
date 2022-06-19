const exp = require("constants")
const express = require("express")
const app = express()
const port = process.env.PORT ||8000
const path = require('path')
const hbs = require("hbs")

staticPath = path.join(__dirname,"../public")
viewsPath = path.join(__dirname,"../templates/views")
partialsPath = path.join(__dirname,"../templates/partials")

app.use(express.static(staticPath))
app.set("view engine","hbs")
app.set("views",viewsPath)

hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=> console.log(`listening to port ${port}`))