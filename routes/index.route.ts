import { Router,Application } from "express";
import TopicsRoute from "./topic.route";

const clientRoutes=(app:Application)=>{
  app.use("/topics",TopicsRoute)
}
export default clientRoutes