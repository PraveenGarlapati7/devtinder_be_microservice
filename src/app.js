const express = require('express');
const app = express();

// app.use("/", (req, res) => {
//     res.send("Hello Praveen")
// })

app.use("/test", (req, res) => {
    res.send("Hello hello hello.....")
})

app.use("/hello", (req, res) => {
    res.send("Hello from Server")
})

app.listen(7777, () => {
    console.log("Server is succesfully listening on Port 7777...")
});