import { Response,Request } from "express"
import Song from "../models/song.model";
import Singer from "../models/singer.model";
import { convertToSlug } from "../helpers/convertToSlug";
import { title } from "process";

// {GET} /search/:type
export const result= async (req:Request, res:Response) :Promise<void> =>{

  const type=req.params.type
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
      //làm như này cx dc nhưng mà front-end ko nhận dc nên chúng ta làm hẳn object
      // item["infoSinger"]=infoSinger 
      // newSongs=songs
      newSongs.push({
        id:item.id,
        title:item.title,
        avatar:item.avatar,
        like:item.like,
        slug:item.slug,
        infoSinger:{
          fullName:infoSinger.fullName
        }
      })
    }
    
  }

 
  switch(type){
     case "result":
       res.render("client/pages/search/result",{
        pageTitle:"Kết quả tìm kiếm",
        keyword:keyword,
        songs:newSongs
      })
      break;
      case "suggest":
        res.json({
          code:200,
          message:"Thành công",
          songs:newSongs
        })
        break;
      default:
        res.json({
          code:400,
          message:"Lỗi",
        })
        break;
  }
}