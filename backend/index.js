const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const uri = require('./config/mongoURI');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true}).then(() => console.log("Connected!"),);

app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Started on PORT: " + PORT,),);
