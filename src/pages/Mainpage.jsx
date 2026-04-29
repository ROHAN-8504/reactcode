import { useState,useEffect } from "react";
function Mainpage() {
    let name="rohan";
    let age=100;
    let comapany="trueminds"

 //create a state variables

const [id, setid] = useState('')
const [title, settitle] = useState('')
const [price, setprice] = useState('')
const [image, setimage] = useState('')
const [showform,setshowform]=useState(false)
const [isloggedin,setisloggedin]=useState(false)
const [message,setmessage]=useState(false)
const [dark,setdark]=useState(false)
//function which send this product details to the  backend

async function handlesubmit(e){
e.preventDefault()

//post request
///api=====>  http://localhost:3000/products


let response= await fetch('http://localhost:3000/products',{
    method:'POST',
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
      id,
      title,
      price,
      image
    })
  })
let finalresponse=  await response.json()
 alert(finalresponse.msg)
}


//
useEffect(() => {
  document.body.className=dark ? 'bg-black-900 text-white' : 'bg-white-300  text-black'
  }, [dark])


  return (
   <>
   <div class="border-2 border-s-olive-800 bg-s ">

   <p class="text-white bg-amber-400"  >name:{name}</p>
   <p class="p-4" >age:{age}</p>
   <p  class="p-b "  >comapany:{comapany}</p>
   <p>experience:{1+1+1+"years"}</p>

<button class='rounded-[50%] bg-sky-300  hover:bg-emerald-300' >signup</button>
   </div>
<button onClick={()=>setdark(!dark)} >{dark?<a>lightmode</a>:<a>darkmode</a>}</button>
  <button onClick={()=>setshowform(true)}   >ADD A PRODUCT</button>
{showform &&(
    <form onSubmit={handlesubmit}    >
     <input type="text" placeholder="id"   onChange={e=>setid(e.target.value)}     />
     <input type="text" placeholder="title" onChange={e=>settitle(e.target.value)}   />
     <input type="text" placeholder="price" onChange={e=>setprice(e.target.value)}   />
     <input type="text" placeholder="image" onChange={e=>setimage(e.target.value)}  />
     <button type="submit"   >Submit</button>
    </form>
)
}


<button onClick={()=>setisloggedin(true)}>
  {isloggedin?<a>submit</a>:<a>dont submit</a>}
</button>

<button onClick={()=>setmessage(true)} >change status</button>
{message?<p>hi welcome back</p>:<p>register</p>}


   </>



  )
}

export default Mainpage