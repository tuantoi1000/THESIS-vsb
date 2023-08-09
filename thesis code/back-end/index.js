

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const productRoute = require("./routes/Product");
const userRoute = require("./routes/User");

dotenv.config();


const app = express();

app.use("/public", express.static(__dirname + "/public"));

// connect mongodb
mongoose.connect(process.env.MONGODB_URL, () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Connected to MongoDB");
    } else {
        console.log("Error connecting to MongoDB " + mongoose.connection.readyState);
    }
})

app.use(cors());
app.use(express.json());
app.use(morgan())
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'somesecret', 
    cookie: { maxAge: 60000 }}));

//routers
app.use('/v1/product', productRoute);
app.use('/v1/user', userRoute);

let port = 8000;
app.listen(port, () => console.log('server is running in port ' + port));