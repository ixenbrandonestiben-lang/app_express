import express from "express";
import 'dotenv/config';
import estudianteRouter from "./routes/estudiantes.routes.js";

const app = express();

app.use(express.json());

app.use((req,res,next)=>{console.log('Role: ', `req.headers.role`),
next()});


app.use('/estudiantes', estudianteRouter);


app.listen({
    hostname: process.env.APP_HOSTNAME2,
    port: process.env.APP_PORT2
}, ()=> console.log(`app running at http://${process.env.APP_HOSTNAME2}:${process.env.APP_PORT2
}`));