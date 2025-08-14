import { Response,Request } from "express"
import Song from "../../models/song.model"
import Topic from "../../models/topic.model"
import Singer from "../../models/singer.model"
import { systemConfig } from "../../config/system"

// {GET}/admin/songs
export const index= async (req:Request, res:Response):Promise<void>=>{
  const songs=await Song.find({
    deleted:false,
  })

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

// {GET}/admin/create
export const createPost = async (req:Request, res:Response):Promise<void>=>{
  const dataSong={
    title: req.body.title,
    topicId: req.body.topicId,
    singerId: req.body.singerId,
    description: req.body.description,
    status: req.body.status,
    avatar: req.body.avatar
  }
  const song=new Song(dataSong)
  await song.save()

  res.redirect(`${systemConfig.prefixAdmin}/songs`)
}