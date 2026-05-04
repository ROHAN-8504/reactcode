import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearch(searchQuery)
      navigate('/products')
      setSearchQuery('')
    }
  }

  return (
   <>
   <div class="flex justify-center gap-10"  >
    <img class="animate-spin"  src="public/favicon.svg" alt="" />
    <nav class='flex gap-5' >
 <Link to={'/'} ><a href="">Home</a></Link>
      
 <Link to={'/products'} ><a href="">Products</a></Link>

 <Link to={'/about'} > <a href="">About</a></Link>


<Link  to={'/signup'}  ><a href="">Signup</a></Link>
      
      <form onSubmit={handleSearch} class='flex justify-between gap-2'>
      <input 
        class='rounded-md border-black border'   
        type="text" 
        placeholder="search" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type='submit' class='bg-sky-300 text-white font-bold font-mono rounded-full p-2'>search</button>
      </form>
    </nav>
   </div>
   </>
  )
}

export default Header