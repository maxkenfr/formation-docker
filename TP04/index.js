const express = require('express');
const fs = require("fs");
const morgan = require("morgan");
const app = express();
const logFile = fs.createWriteStream('./log/morgan', {flags: 'a'});
const port = process.env.PORT || 3000;

app.use(morgan('combined', { stream: logFile }));

app.get('/', async (req, res) => {
    res.json({status:1});
});
app.listen(port, () => console.log(`TP03 listening on port ${port}!`));
