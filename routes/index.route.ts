import { Router,Application } from "express";
import TopicsRoute from "./topic.route";
import { songRoutes } from "./song.route";

const clientRoutes=(app:Application)=>{
  app.use("/topics",TopicsRoute)
  app.use("/songs",songRoutes)
}
export default clientRoutes