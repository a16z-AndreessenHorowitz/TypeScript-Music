import { Router } from "express";
const route:Router =Router()
import * as controller from "../controllers/song.controller"

route.get(`/:slugTopic`,controller.list)

export const songRoutes:Router=route