const express = require("express");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const { default: mongoose } = require("mongoose");
require('dotenv').config();
 const app = express();
 const port = process.env.PORT || 5000;
 const homeRouter = require('./routes/home');
 const aboutRouter = require('./routes/about');
 const portfolioRouter = require('./routes/portfolio');
const contactRouter = require('./routes/contact');
const authRouter = require('./routes/auth');


 //middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(cors());

 //routes 
 app.use('/auth', authRouter);
 app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/portfolio', portfolioRouter);
app.use('/contact', contactRouter);

 //Connect to MongoDB

 moongose.connect(process.env.DATABASE);

 const connection = mongoose.connection;
 connection.once('open',() => {
    console.log('MongoDB Connection Established')
 })

