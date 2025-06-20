import express from 'express';
import mongoose from 'mongoose';// imports monogoose 
import "dotenv/config";
const app = express()
app.use(express.json())// parse to json if using put or post requests 
const PORT = process.env.PORT;
//await mongoose.connect(process.env.MONGO_URI);// connects mongoose to mongodb 
//console.log ('mongoose connected')

app.get('/',(req,res)=>{
    res.json("base url reached")
})
await mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`Connected to database!`);
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(()=>{
    console.log(`Connection Failed!`);
});
app.listen(PORT,()=>{
    console.log("server Listening on port", PORT)
})
