const express = require('express');
const routes = require('./controllers/routes');
const mongoose = require('mongoose');
const uri = require('./config/mongoURI');
var cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true}).then(() => console.log("Connected!"),);

app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Started on PORT: " + PORT,),);
