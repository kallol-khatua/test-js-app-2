const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    const response = { statsCode: 200, message: "connected", success: true, port: port };
    console.log(req.method + " " + req.path)
    console.log("Response: ", response)
    res.status(200).send(response)
})

app.get("/hello-world", async (req, res) => {
    const response = { statsCode: 200, message: "Hello world", success: true, port: port };
    console.log(req.method + " " + req.path)
    console.log("Response: ", response)
    res.status(200).send(response)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})