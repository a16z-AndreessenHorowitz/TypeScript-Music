import { Response,Request } from "express"
import Song from "../models/song.model";
import Singer from "../models/singer.model";
import { convertToSlug } from "../helpers/convertToSlug";

// {GET} /search/result
export const result= async (req:Request, res:Response) :Promise<void> =>{
  const keyword:string =`${req.query.keyword}`
  
  let newSongs=[];
  // tránh trường hợp ko có keyword 
  if(keyword){
    const keywordRegax=new RegExp(keyword,"i")
    //Tạo ra slug ko dấu có dấu - ngăn cách
      const stringSlug=convertToSlug(keyword)
      // console.log(stringSlug)
      const stringSlugRegax=new RegExp(stringSlug,"i")//sử dụng regax để nó tìm kiếm tương đối
    //end
    const songs=await Song.find({
      $or:[
        {title:keywordRegax},
        {slug:stringSlugRegax}
      ]
    })
    
    for (let item of songs){
      const infoSinger=await Singer.findOne({
        _id:item.singerId,
      })
      item["infoSinger"]=infoSinger
    }
    newSongs=songs
  }

  res.render("client/pages/search/result",{
    pageTitle:"Kết quả tìm kiếm",
    keyword:keyword,
    songs:newSongs
  })
}