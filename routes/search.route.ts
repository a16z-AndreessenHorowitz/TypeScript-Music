import { Router } from "express";
const route:Router =Router()
import * as controller from "../controllers/search.controller"

route.get(`/result`,controller.result)

export const searchRoute:Router=route