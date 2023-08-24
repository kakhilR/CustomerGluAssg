import express from 'express';
import { databaseConnection } from './models/connection.js';
import { userRoutes } from './routes/user.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

await databaseConnection();

// app.use('/api',(req,res)=>{
//     res.send("hello")
// })

app.use('/api',userRoutes);

app.listen(8000,()=>{
    console.log("listening on port 8000")
})

