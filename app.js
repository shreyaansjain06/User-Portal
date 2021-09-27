const express= require('express')
const port=3000;
const app= express();

// Middleware
// it helps in authentication 
// checking before responging to request
const middleware=(req,res,next)=>{
    console.log("middleware");
    next();
}

// Handling get post req
app.get("/",(req,res)=>{
    res.send("hello this my home page");
})
app.get("/about",middleware,(req,res)=>{
    res.send("hello this my about page");
})
app.get("/contact",(req,res)=>{
    res.send("hello this my contact page");
})
app.get("/signup",(req,res)=>{
    res.send("hello this my signup page");
})
app.get("/signin",(req,res)=>{
    res.send("hello this my signin page");
})

// listening on port
app.listen(port,()=>{
    console.log(`Server is listening on port:${port}`)
})