import { Application, Express } from "express";
import { DashBoardRoute } from "./dashboard.route";
import { systemConfig } from "../../config/system";

export const adminRoutes=(app:Application):void=>{
  const PATH_ADMIN=`${systemConfig.prefixAdmin}`
  app.use(`${PATH_ADMIN}/dashboard`,DashBoardRoute)
}
