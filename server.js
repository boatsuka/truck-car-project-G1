const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

const indexRouter = require('./routers/index')

mongoose.connect(`${MONGODB_URL}`)
    .then(() => {console.log('Database Connected!!')})
    .catch((error) => { throw error })


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`start server http://localhost:${PORT}`);
});