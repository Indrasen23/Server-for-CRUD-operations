import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

// for connecting with online DB
mongoose.connect(process.env.MONGO_URL_ATLAS).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

/*
// for connecting with local DB
mongoose.connect(process.env.MONGO_URL_LOCAL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
*/

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
})

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

export default db;