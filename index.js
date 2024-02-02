const express = require("express")
const app = express()
const port = 3000
const { sql } = require("@vercel/postgres")

const jsFolder = __dirname + '/frontend/js'
const fs = require('fs')
fs.readdir(jsFolder, (err, files) => {
  if (err) {
    console.log("Error: " + err)
  } else {
    files.forEach(file => {
        console.log(file)
        app.get("/js/" + file, (req, res) => {
            res.sendFile(__dirname + "/frontend/js/" + file)
        })
    })
  }
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/html/main.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})