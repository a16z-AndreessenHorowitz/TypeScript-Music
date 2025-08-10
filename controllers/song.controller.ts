import { Request, Response } from "express";
import Topic from "../models/topic.model"
import Song from "../models/song.model";
import Singer from "../models/singer.model";
import FavoriteSong from "../models/favorite-song.model";

// {GET} /song/:slugTopic
export const list = async (req: Request, res: Response): Promise<void> => {
  const slug=req.params.slugTopic
  const topic=await Topic.findOne({
    slug:slug,
    status:"active",
    deleted:false
  })
  //Truy vấn ra những bài hát có topicId như vậy
  const songs=await Song.find({
    topicId: topic.id,
    status:"active",
    deleted:false
  }).select("avatar slug title singerId like ")
  //lấy ra tên ca sĩ
  for (const song of songs){
    const infoSinger=await Singer.findOne({
      _id:song.singerId,
      status:"active",
      deleted:false
    }).select("fullName")
    song["infoSinger"]=infoSinger
  }


  res.render("client/pages/songs/list", {
    pageTitle: topic.title,
    songs:songs
  })
}
// {GET} /detail/:slugSong 
export const detail = async (req: Request, res: Response): Promise<void> => {
  const slugSong: string= req.params.slugSong

  const song=await Song.findOne({
    slug:slugSong,
    deleted:false,
    status:"active"
  })

  //Lấy ra thông tin ca sỹ
  const singer=await Singer.findOne({
    _id:song.singerId,
    deleted:false
  }).select("fullName")

    //Lấy ra chủ đề
  const topic=await Topic.findOne({
    _id:song.topicId,
    deleted:false
  }).select("title")

  //kiểm tra xem nó có đang đc yêu thích
  const favoriteSong=await FavoriteSong.findOne({
    songId: song.id,
  })

  song["isFavoriteSong"]= favoriteSong ? true:false
  res.render("client/pages/songs/detail", {
  pageTitle:"Chi tiết bài hát",
  song:song,
  singer:singer,
  topic:topic
  })
}

// {PATCH} /songs/like/:typeLike/:idSong
export const like = async (req: Request, res: Response): Promise<void> => {
  const idSong:string =req.params.idSong 

  const typeLike:string=req.params.typeLike



  const song=await Song.findOne({
    _id:idSong,
    status:"active",
    deleted:false
  })
  //mục đích newLike là đưa nó ra giao diện cho thằng front-end
  const newLike:number = typeLike=="like" ? song.like+1 : song.like-1
  //update lại bài hát
  await Song.updateOne({
    _id:idSong,
  },{
    like: newLike
  })
  res.json({
    code:200,
    message:"Thành công",
    like:newLike
  })
}


// {PATCH} /songs/favorite/:typeFavorite/:idSong
export const favorite = async (req: Request, res: Response): Promise<void> => {
  const idSong:string =req.params.idSong 
  const typeFavorite:string=req.params.typeFavorite

  switch(typeFavorite){
    case "favorite":
      //check đã tồn tại bài hát yêu thích đó chưa
      const existFavoriteSong=await FavoriteSong.findOne({
        songId:idSong
      })
      if(!existFavoriteSong){
        const record=new FavoriteSong({
          // userId:"",
          songId:idSong
        })
        await record.save()
      }
      break
    case "unfavorite":
      await FavoriteSong.deleteOne({
        songId:idSong
      })
      break;
    default:
      break;
  }
  
  res.json({
    code:200,
    message:"Thành công",
  })
}