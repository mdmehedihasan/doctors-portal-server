const express = require('express')
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

//middleware set up
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ay8jp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




app.get('/', (req, res) => {
    res.send('Hello from doctor!')
})

app.listen(port, () => {
    console.log(`Doctors app listening ${port}`)
})