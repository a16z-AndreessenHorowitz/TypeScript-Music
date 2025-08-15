//Upload Image
const uploadImage=document.querySelector("[upload-image]")
if(uploadImage){
  const uploadImageInput=document.querySelector("[upload-image-input]")
  const uploadImageReview=document.querySelector("[upload-image-review]")

  const buttonCloseImage=document.querySelector("[button-close-image]")
  uploadImageInput.addEventListener("change",(e)=>{
    const file=e.target.files[0]
    
    if(file){
      buttonCloseImage.classList.remove("hidden")
      uploadImageReview.src=URL.createObjectURL(file)

      buttonCloseImage.addEventListener("click",()=>{
        uploadImageInput.value=""
        uploadImageReview.src=""
        buttonCloseImage.classList.add("hidden")
      })
    }
  }) 

}
//Upload Image

//upload audio
const uploadAudio = document.querySelector("[upload-audio]")
if (uploadAudio) {
  const uploadAudioInput = document.querySelector("[upload-audio-input]")
  const uploadAudioReview = document.querySelector("[upload-audio-review]")
  const buttonCloseAudio = document.querySelector("[button-close-audio]")

  // Nếu chưa có src audio => ẩn controls
  if (!uploadAudioReview.src || uploadAudioReview.src.trim() === "") {
    uploadAudioReview.removeAttribute("controls")
  } else {
    // Có audio sẵn => hiện nút xoá
    buttonCloseAudio.classList.remove("hidden")
  }

  uploadAudioInput.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      uploadAudioReview.src = URL.createObjectURL(file)
      uploadAudioReview.setAttribute("controls", "")
      buttonCloseAudio.classList.remove("hidden")
    }
  })

  buttonCloseAudio.addEventListener("click", () => {
    uploadAudioInput.value = ""
    uploadAudioReview.src = ""
    uploadAudioReview.removeAttribute("controls")
    buttonCloseAudio.classList.add("hidden")
  })
}
