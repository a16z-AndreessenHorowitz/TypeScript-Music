import { Response,Request } from "express"
import Song from "../../models/song.model"
import Topic from "../../models/topic.model"
import Singer from "../../models/singer.model"
// {GET}/admin/dashboard
export const index= async (req:Request, res:Response):Promise<void>=>{
  const songs=await Song.find({
    deleted:false,
  })
  console.log(songs)

  res.render("admin/pages/songs/index",{
    pageTitle:"Tổng quan",
    songs:songs
  })
}

// {GET}/admin/create
export const create= async (req:Request, res:Response):Promise<void>=>{
  const topics=await Topic.find({
    deleted:false,
    status:"active"
  }).select("title")//id mặc định trả ra nên ko cần select

  const singers=await Singer.find({
    deleted:false,
    status:"active"
  }).select("fullName")
  res.render("admin/pages/songs/create",{
    pageTitle:"Thêm mới bài hát",
    topics:topics,
    singers:singers
  })
}