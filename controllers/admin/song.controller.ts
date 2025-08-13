import { Response,Request } from "express"
import Song from "../../models/song.model"
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