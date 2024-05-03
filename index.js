import express from 'express';
import dotenv from 'dotenv';
import productRoute from './routes/productRoute.js';
import bodyParser from 'body-parser';
import db from './db.js'


dotenv.config();
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
const port = process.env.PORT_VAL || 3000;

app.use(bodyParser.json())

// Your routes and other middleware here
// app.get('/', (req, res) => {
//     res.send('Welcome to my clothes website...');
// })

app.use('/', productRoute);


app.listen(port || 8000, () => {
    console.log(`Example app listening on port ${port}`)
});