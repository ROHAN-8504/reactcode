
import { useState } from 'react'
function Signup() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState('')

  //function which sends my form data to the backend
 
  async function handlesub(e){
    e.preventDefault() //this will stop reloading the page
    //post request with user details as a paylod
   ///api----->   http://localhost:3000/signup
    let response=await fetch('http://localhost:3000/signup',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({username,password,email,role})
    })

    let finalresponse=await response.json()

     alert(finalresponse.msg)

  }

  return (
    <>
    <form onSubmit={handlesub}  >
   <div>
    <label htmlFor="">Username</label>
  <input type="text"  onChange={e=>setusername(e.target.value)}     />
   </div>

   <div>
  <label htmlFor="">Email</label>
  <input type="email" onChange={e=>setemail(e.target.value)}   />
   </div>

   <div>
  <label htmlFor="">Password</label>
  <input type="password" onChange={e=>setpassword(e.target.value)}     />
   </div>

      <div>
  <label htmlFor="">role</label>
  <input type="text" onChange={e=>setrole(e.target.value)}     />
   </div>
    <button class="rounded-md bg-sky-500 transition delay-150 duration-300 ease-in-out ..."  type='submit' >Signup</button>
    </form>
    </>
  )
}

export default Signup