const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //used to include environment variables in dotenv file

/***Creating Express server****/
const app = express();
const port = process.env.PORT || 5000;
/***Ends Express server code here***/

/****Allows to parse json in server****/
app.use(cors());
app.use(express.json());
/****Json PArser Ends here******/

const uri = process.env.ATLAS_URI; //atlas_uri is an environment variable nd it needs to be declared in a .env file
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected successfully");
});

//**We are informing server about these routes**/
const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');

app.use('/exercise', exercisesRouter);
app.use('/user', usersRouter);
//ENDS

//Starts the server by nodemon command
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});