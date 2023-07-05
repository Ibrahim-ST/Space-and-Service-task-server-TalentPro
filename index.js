const express = require('express');
const cors = require('cors');
const data = require('./data.json')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Task: Explore Our Storage Space, Co-Working Space Co-Warehouse & Services. Visit https://talent-pro-task-server.vercel.app/data for json data')
})

app.get('/data', (req, res) => {
    res.send(data)
    })

app.listen(port, ()=> {
    console.log(`Talent pro task server is running on port ${port}`);
})