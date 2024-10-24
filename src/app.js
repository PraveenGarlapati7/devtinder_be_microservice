const express = require('express');
const app = express();

app.get("/user", (req, res, next) => {
    console.log("Inside request handler 1");
    // res.send("Response 1");
    next();
},(req, res, next) => {
    console.log("Inside request handler 2");
    // res.send("Response 2");
    next();
}, (req, res, next) => {
    console.log("Inside request handler 3");
    res.send("Response 3");
    // next();
})

app.listen(7777, () => {
    console.log("Server is succesfully listening on Port 7777...")
});