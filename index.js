const express = require("express")
const cors = require("cors")

const app = express()

const port = 3000

app.use(cors())

app.get("/", (req, res) => {
    res.send("{ \"slackUsername\": thanasis, \"backend\": true, \"age\": 20, \"bio\": An amateur exploring complicated things}")
    
})

app.listen(port, () => {
    console.log(`Hello, listening on ${port}`)
})