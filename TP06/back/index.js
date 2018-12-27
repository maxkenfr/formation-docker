const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3030;
mongoose.connect(process.env.NODE_ENV === 'production' ? 'mongodb://mongo/test' : 'mongodb://localhost:32771/test', {useNewUrlParser: true, useCreateIndex: true});
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./controller'));

app.listen(port, () => console.log(`TD-api listening on port ${port}!`));
