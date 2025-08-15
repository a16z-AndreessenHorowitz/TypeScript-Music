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
  let avatar="";
  if(req.body.avatar){
    avatar=req.body.avatar[0]//uploadFields là 1 mảng nên lấy phần tử đầu
  }
  let audio="";
  if(req.body.audio){
    audio=req.body.audio[0]//uploadFields là 1 mảng nên lấy phần tử đầu
  }
  const dataSong={
    title: req.body.title,
    topicId: req.body.topicId,
    singerId: req.body.singerId,
    description: req.body.description,
    status: req.body.status,
    audio:audio,
    avatar:avatar,
    lyrics:req.body.lyrics
  }
  const song=new Song(dataSong)
  await song.save()

  res.redirect(`${systemConfig.prefixAdmin}/songs`)
}

// {GET}/admin/songs/edit/:id
export const edit= async (req:Request, res:Response):Promise<void>=>{
  const id=req.params.id
  const song=await Song.findOne({
    deleted:false,
    _id:id,
  })  

  const topic=await Topic.find({
    _id:song.topicId,
    deleted:false
  }).select("title")

  const singer=await Singer.find({
    _id:song.singerId,
    deleted:false
  }).select("fullName")


  res.render("admin/pages/songs/edit",{
    pageTitle:"Chỉnh sửa bài hát",
    song:song,
    topics:topic,
    singers:singer
  })
}

// {PATCH}/admin/songs/edit/:id
export const editPatch= async (req:Request, res:Response):Promise<void>=>{
  const id=req.params.id

  const dataSong={
    title: req.body.title,
    topicId: req.body.topicId,
    singerId: req.body.singerId,
    description: req.body.description,
    status: req.body.status,
    lyrics:req.body.lyrics
  }
  // nếu có thì mới cập nhật 
  if(req.body.avatar){
    dataSong["avatar"]=req.body.avatar[0]
  }
  if(req.body.audio){
    dataSong["audio"]=req.body.audio[0]
  }
  await Song.updateOne({
    _id:id
  },dataSong)
  res.redirect(`${systemConfig.prefixAdmin}/songs/edit/${id}`)
}