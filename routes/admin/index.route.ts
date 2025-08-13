import { Application, Express } from "express";
import { DashBoardRoute } from "./dashboard.route";
import { systemConfig } from "../../config/system";
import { TopicRoutes } from "./topic.route";
import { SongRoutes } from "./song.route";

export const adminRoutes=(app:Application):void=>{
  const PATH_ADMIN=`${systemConfig.prefixAdmin}`
  app.use(`${PATH_ADMIN}/dashboard`,DashBoardRoute)
  app.use(`${PATH_ADMIN}/topics`,TopicRoutes)
  app.use(`${PATH_ADMIN}/songs`,SongRoutes)
}
