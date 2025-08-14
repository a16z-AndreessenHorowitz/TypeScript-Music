import { Router } from "express";

const route:Router=Router();
import * as controller from "../../controllers/admin/song.controller"

route.get("/",controller.index)

route.get("/create",controller.create)
export const SongRoutes:Router=route