import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { applyMiddleware } from 'redux';
import {connectDB} from '../../src/server/connect-db'

let port = 8081;
let app =express();

app.listen(port,console.log("server listning on port ",port));

// app.get('/',(req,res)=>{
//     res.send("hellow word");
// })

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

export const updateDb=  async data=>{
let db = await connectDB();
let collection =db.collection(`testDB`)
await collection.insertOne(data);
}

app.post('/update/db',async (req,res)=>{
    let update= req.body.data;
    await updateDb(update);
    res.status(201).send();
})