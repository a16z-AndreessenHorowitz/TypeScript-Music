import unidecode from "unidecode"

export const convertToSlug=(text :string):string=>{
  const unidecodeText=unidecode(text.trim())// hàm trim loại bỏ khoảng trắng đầu cuối

  const slug=unidecodeText.replace(/\s+/g,"-") //tìm khoảng trắng thay thế bằng dấu trừ, s+ là tìm cho đến khi hết khoảng trắng
  // console.log(slug)
  // hàm này còn viết hoa chữ đầu nhưng không cần vì tìm kiếm theo Regax r
  // let lowcaseText=slug.toLowerCase();
  // console.log(lowcaseText)
  return slug
}