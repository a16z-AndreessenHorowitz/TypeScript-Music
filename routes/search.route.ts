import { Router } from "express";
const route:Router =Router()
import * as controller from "../controllers/search.controller"

//có thể thấy là /result và /suggest là cùng nên có thể làm chung
route.get(`/:type`,controller.result)


export const searchRoute:Router=route