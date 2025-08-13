import { Response,Request } from "express"
import Topic from "../../models/topic.model"
// {GET}/admin/dashboard
export const index= async (req:Request, res:Response):Promise<void>=>{
  const topics=await Topic.find({
    deleted:false,
  })
  console.log(topics)

  res.render("admin/pages/topics/index",{
    pageTitle:"Tổng quan",
    topics:topics
  })
}