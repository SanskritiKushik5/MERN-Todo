const dotenv = require("dotenv");

dotenv.config();
module.exports = `mongodb+srv://admin:${process.env.MONGOPASSWORD}@cluster0.ksaud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;