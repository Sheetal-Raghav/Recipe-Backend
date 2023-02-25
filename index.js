const express = require('express')
const app = express()
const Authentication = require("./routes/authentication")
const PostAndGetRoute = require("./routes/postAndgetRoute")
const bodyParser = require("body-parser")
const cors = require('cors')

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }
  app.use(cors(corsOptions))
const mongoose = require("mongoose")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://sheetal:sheetal1234@recipe.epdnzpc.mongodb.net/?retryWrites=true&w=majority")


app.use(Authentication)
app.use(PostAndGetRoute)
app.use(express.json())

app.listen(5000,()=>console.log("server started at 5000"))

