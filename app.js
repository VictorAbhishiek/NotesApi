const connectDb = require('./db/connect')
const express = require('express');
const notes = require('./routes/notes');
require('dotenv').config()
const app= express();
const port = 3000;
app.use(express.json())
app.use(express.static('./public'))
//routes


app.get('/hello',(req,res)=>{
    res.send(`Note Manager App`);
});
app.use('/api/v1/notes',notes);
const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URl);
        app.listen(port, console.log(`server listenin on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
start()