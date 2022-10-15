import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from './Routes/route.js';
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


app.use(cors());
app.use('/', Route);


if (process.env.NODE_ENC == 'production') {
    app.use(express.static("client/build"));
}


const Port = process.env.PORT || 8000;



const url = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-azjrlea-shard-00-00.6vhfeci.mongodb.net:27017,ac-azjrlea-shard-00-01.6vhfeci.mongodb.net:27017,ac-azjrlea-shard-00-02.6vhfeci.mongodb.net:27017/NEWSHORTS?ssl=true&replicaSet=atlas-yqc3lz-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(url);


app.listen(Port, () => {
    console.log(`server is runneing at ${Port}`);
});

DefaultData();


