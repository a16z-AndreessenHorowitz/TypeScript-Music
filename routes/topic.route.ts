import { Router } from "express";
const route:Router =Router()
import * as controller from "../controllers/topic.controller"

route.get("/",controller.index)

export default route