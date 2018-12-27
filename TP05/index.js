const express = require('express');
const fs = require("fs");
const MongoClient = require('mongodb').MongoClient;
const url = process.env.NODE_ENV === 'production' ? 'mongodb://mon-alias-db' : 'mongodb://localhost:32771';
const dbName = 'test';
const morgan = require("morgan");
const app = express();
const logFile = fs.createWriteStream('./log/morgan', {flags: 'a'});
const port = process.env.PORT || 3000;

app.use(morgan('combined', { stream: logFile }));

MongoClient.connect(url, function(err, client) {
    console.log(err);
    const col = client.db(dbName).collection('test');
    app.get('/', async (req, res) => {
        let all =  await col.find().toArray();
        res.json(all);
    });
    app.get('/create', async (req, res) => {
        await col.insert({date: new Date()});
        res.send('ok');
    });
    app.listen(port, () => console.log(`TD03 listening on port ${port}!`));
});
