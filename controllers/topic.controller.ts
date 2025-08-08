import { Request, Response } from "express";
import Topic from "../models/topics.model"
export const index = async (req: Request, res: Response): Promise<void> => {
  const topic=await Topic.find({
    deleted:false
  })  
  console.log(topic)
  res.render("client/pages/topics/index",{
    pageTitle:"Chủ đề bài hát",
    topic:topic
  })
}