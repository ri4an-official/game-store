const express = require("express")
const mongoose = require("mongoose")
const { createServer } = require("http")
const { port, uri, options } = require("./config.json")

const app = express()
mongoose
    .connect(uri, options)
    .then(() => console.log("MongoDB connect"))
    .catch(console.log)
createServer(app).listen(port, () => console.log(`server's up.port: ${port}`))
module.exports = mongoose.model(
    "users",
    mongoose.Schema(app, { name: String, email: String, role: String })
)
