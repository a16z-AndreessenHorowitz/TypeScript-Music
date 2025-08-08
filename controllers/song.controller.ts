import { Request, Response } from "express";
import Topic from "../models/topic.model"
import Song from "../models/song.model";
import Singer from "../models/singer.model";

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