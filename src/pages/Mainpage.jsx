import { useState } from "react";
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



  return (
   <>
   <div style={{border:"solid red 1px"}}>

   <p>name:{name}</p>
   <p>age:{age}</p>
   <p>comapany:{comapany}</p>
   <p>experience:{1+1+1+"years"}</p>
   </div>

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