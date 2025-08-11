import { Router,Application } from "express";
import TopicsRoute from "./topic.route";
import { songRoutes } from "./song.route";
import { favoriteSong } from "./favorite-song.route";

const clientRoutes=(app:Application)=>{
  app.use("/topics",TopicsRoute)
  app.use("/songs",songRoutes)
  app.use("/favorite-songs",favoriteSong)
}
export default clientRoutes