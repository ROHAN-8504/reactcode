import {Link} from "react-router-dom"
function Header() {
  return (
   <>
   <div class="flex justify-center gap-10"  >
    <img class="animate-ping"  src="public/favicon.svg" alt="" />
    <nav class='flex gap-5' >
 <Link to={'/'} ><a href="">Home</a></Link>
      
 <Link to={'/products'} ><a href="">Products</a></Link>

 <Link to={'/about'} > <a href="">About</a></Link>


<Link  to={'/signup'}  ><a href="">Signup</a></Link>
      
      
      
      
    </nav>
   </div>
   </>
  )
}

export default Header