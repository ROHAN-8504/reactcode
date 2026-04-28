import {Link} from "react-router-dom"
function Header() {
  return (
   <>
   <div style={{display:"flex",justifyContent:"center",gap:"50px"}}  >
    <img src="public/favicon.svg" alt="" />
    <nav style={{display:"flex",gap:"20px"}} >
 <Link to={'/'} ><a href="">Home</a></Link>
      
 <Link to={'/products'} ><a href="">Products</a></Link>

 <Link to={'/about'} > <a href="">About</a></Link>

 <Link> <a href="">About</a></Link>

 <Link><a href="">Contact</a></Link>

 <Link><a href="">Contact</a></Link>

<Link><a href="">Signup</a></Link>
      
      
      
      
    </nav>
   </div>
   </>
  )
}

export default Header