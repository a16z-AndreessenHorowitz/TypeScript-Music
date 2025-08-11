// APlayer 
//cứ check trước coi có thẻ div họk hã làm
const aplayer=document.querySelector("#aplayer")
if(aplayer){
  //lấy ra data bài hát

  let dataSong=aplayer.getAttribute("data-song")
  //mặc định truyền lên là đang dạng JSON
  dataSong=JSON.parse(dataSong)

  let dataSinger=aplayer.getAttribute("data-singer")
  dataSinger=JSON.parse(dataSinger)
  //end lấy ra data

  const ap = new APlayer({
  container: aplayer,
    autoplay: true,
    volume:0.5,
    audio: [{
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover:dataSong.avatar,
    }]
});

//hình quay khi nhạc
  const avatar=document.querySelector(".singer-detail .inner-avatar")
//bắt sự kiện
  ap.on('play', function () {
    avatar.style.animationPlayState="running";
  });

  ap.on('pause', function () {
    avatar.style.animationPlayState="paused";
  });
//DOM CSS (thẻ . style . tên thuộc tính viết theo Camel Case)
  
}

// Aplayer


//button like
const buttonLike=document.querySelector("[button-like]")
if(buttonLike){
  buttonLike.addEventListener("click",()=>{
    const idSong=buttonLike.getAttribute("button-like")
    
    //coi nó có active ko
    const isActive=buttonLike.classList.contains("active")

    const typeLike=isActive ? "dislike":"like"
    const link=`/songs/like/${typeLike}/${idSong}`

    const option={
      method:'PATCH'
    }
    fetch(link,option)
      .then(res=>res.json())
      .then(data=>{
        const span=buttonLike.querySelector("span")
        span.innerHTML=`${data.like}`
        
        buttonLike.classList.toggle("active")
      })
  })
}
//button like

// button favorite
const buttonFavorite=document.querySelector("[button-favorite]")
console.log(buttonFavorite)
if(buttonFavorite){
  buttonFavorite.addEventListener("click",()=>{
    const idSong=buttonFavorite.getAttribute("button-favorite")
    
    //coi nó có active ko
    const isActive=buttonFavorite.classList.contains("active")

    const typeFavorite=isActive ? "unfavorite":"favorite"
    const link=`/songs/favorite/${typeFavorite}/${idSong}`

    const option={
      method:'PATCH'
    }
    fetch(link,option)
      .then(res=>res.json())
      .then(data=>{        
        buttonFavorite.classList.toggle("active")
      })
  })
}
// button favorite
