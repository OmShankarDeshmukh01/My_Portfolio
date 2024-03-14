const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));





//Index route
app.get("/portfolio" , (req , res)=>{
    res.render("./portfolio/index.ejs");
});

// app.use("/" ,(req , res)=>{
//     res.send("Hello , I am Root.");
// });

app.listen(port , ()=>{
    console.log("app is listening to port");
});