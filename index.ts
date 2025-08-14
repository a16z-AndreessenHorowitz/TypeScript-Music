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

  //body-parser
  import bodyParser from 'body-parser';
  app.use(bodyParser.urlencoded({extended:false}))
  //time cme
  app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
  //time cme
  
  //biến globals
  import { systemConfig } from './config/system';
  app.locals.prefixAdmin=systemConfig.prefixAdmin
  //Routes
  import clientRoutes from './routes/index.route';
  clientRoutes(app)
  import { adminRoutes } from './routes/admin/index.route';
  adminRoutes(app)

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });