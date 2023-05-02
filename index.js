const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const chef = require('./data/chef.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send("Flaming Wings is Running");
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Flaming wings is running on port: ${port}`);
})