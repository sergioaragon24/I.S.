const express = require('express');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.set("PORT", 3003);

module.exports = app;