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

// Upload Audio
const uploadAudio = document.querySelector("[upload-audio]")
if (uploadAudio) {
  const uploadAudioInput = document.querySelector("[upload-audio-input]")
  const uploadAudioReview = document.querySelector("[upload-audio-review]")
  const buttonCloseAudio = document.querySelector("[button-close-audio]")

  // Ẩn control lúc đầu
  uploadAudioReview.removeAttribute("controls")

  uploadAudioInput.addEventListener("change", (e) => {
    const audio = e.target.files[0]

    if (audio) {
      // Gán file vào audio preview
      uploadAudioReview.src = URL.createObjectURL(audio)

      // Hiện control để nghe thử
      uploadAudioReview.setAttribute("controls", "")

      // Hiện nút xoá
      buttonCloseAudio.classList.remove("hidden")

      buttonCloseAudio.addEventListener("click", () => {
        uploadAudioInput.value = ""
        uploadAudioReview.src = ""
        uploadAudioReview.removeAttribute("controls") // Ẩn control lại
        buttonCloseAudio.classList.add("hidden")
      })
    }
  })
}
