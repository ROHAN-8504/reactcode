import { useState,useEffect } from "react"
import Header from "./Header";
function App() {

  const [product, setproduct] = useState([])

useEffect(() => {
  
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproduct(data));
 
}, [])

  return (
    <>
    <Header/>
    <div  style={{display:'flex', flexWrap:"wrap" ,gap:"20px"  }}  >

    {
      product.map((p)=>{
        return <div key={p.id}  style={{border:"solid black 1px",borderRadius:"10px"}}  >
          <img height={300} width={200}    src={p.image} alt="" />
          <p>{p.title.substring(0,10)}</p>
          <p>{p.price}</p>
        </div>
      })
    }
    </div>
    </>
  )
}

export default App
