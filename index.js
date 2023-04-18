const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
 const port = process.env.PORT  || 5000;

const app = express();


//Enable body parser

app.use(express.static(path.join(__dirname, 'public')));

//Set Routes



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set Static Folder


app.use('/openai', require('./routes/openaiROutes'));
app.listen(port, () => console.log(`Server Started on port ${port}`));
