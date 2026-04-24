
function Header() {
  return (
   <>
   <div style={{display:"flex",justifyContent:"center",gap:"50px"}}  >
    <img src="public/favicon.svg" alt="" />
    <nav style={{display:"flex",gap:"20px"}} >
      <a href="">Home</a>
      <a href="">Products</a>
      <a href="">About</a>
      <a href="">Signup</a>
      <a href="">Contact</a>
    </nav>
   </div>
   </>
  )
}

export default Header