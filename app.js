const express=require("express")
const path=require("path")
const app=express()

const views=path.join(__dirname,"/views")
const public=path.join(__dirname,"/public")

app.set("views engine", "ejs")
app.set("views", views)
app.use(express.static(public))



app.get("/",(req,res)=>{
    res.render("home.ejs")
})


app.listen("80", ()=>{
    console.log("App is listening on port 80")
})