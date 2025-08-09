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