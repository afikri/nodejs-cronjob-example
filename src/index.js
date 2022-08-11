const express = require('express')
const uuid = require('uuid')
const cron = require('node-cron')
const fs = require('fs')

const app = express()

const port = 3000



cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})