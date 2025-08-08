  import express, { Application, Request, Response } from 'express';
  import path from 'path';
  
  //env
  import dotenv from 'dotenv';
  dotenv.config();
  //database
  import * as database from "./config/database"
  database.connect()
  //


  const app: Application = express();
  const port = process.env.PORT;

  //pug
  app.use(express.static("public"))
  app.set('views', path.join(__dirname, 'views')); // thêm path.join
  app.set('view engine', 'pug')

  //Routes
  import clientRoutes from './routes/index.route';
  clientRoutes(app)

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });