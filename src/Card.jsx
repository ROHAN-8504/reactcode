
function Card({name,rating,image}) {
  return (
    <>
    <div style={{border:"1px solid black",textAlign:"center" ,maxHeight:"300px", maxWidth:"300px" }}>
        <div style={{display:"flex"}}>

        <img height={50}  width={50}   src={image} alt="" />
        <p>name:{name}</p>
        <p>rating:{rating}</p>
        </div>
    </div>
    </>
  )
}

export default Card