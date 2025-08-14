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