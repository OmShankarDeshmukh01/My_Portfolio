const express = require("express");
const app = express();
const port = 8080;


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname , "/public")));


app.use("/" ,(req , res)=>{
    res.send("Hello , I am Root.");
});


//Index route
app.get("/portfolio" , (req , res)=>{
    
});


app.listen(port , ()=>{
    console.log("app is listening to port");
});