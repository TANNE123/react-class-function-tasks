
const Image=({img,alt})=>{
    return(
        <img src={img} alt={alt}  width={150} height={150} style={{borderRadius:"20px" ,border:"2px solid black"}}/>
    )
}

export default Image;