import { Request, Response } from "express";
import Topic from "../models/topic.model"

// {GET} /topics
export const index = async (req: Request, res: Response): Promise<void> => {
  const topic = await Topic.find({
    deleted: false
  })
  res.render("client/pages/topics/index", {
    pageTitle: "Chủ đề bài hát",
    topic: topic
  })
}