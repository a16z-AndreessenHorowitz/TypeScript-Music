import { Router } from "express";
const route:Router =Router()
import * as controller from "../controllers/favorite-song.controller"

route.get(`/`,controller.index)

export const favoriteSong:Router=route