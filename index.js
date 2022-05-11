const express = require('express')
const cors = require('cors');
require('dotevn').config();
const app = express()
const port = process.env.PORT || 5000;

//middleware set up
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from doctor!')
})

app.listen(port, () => {
    console.log(`Doctors app listening ${port}`)
})