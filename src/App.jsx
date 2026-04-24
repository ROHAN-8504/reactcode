import { useState,useEffect } from "react"
function App() {

  const [product, setproduct] = useState([])

useEffect(() => {
  
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproduct(data));
 
}, [])



  //fetch the data
  

  return (
    <>
    {
      product.map((p)=>{
        return <div key={p.id} >
          <img src={p.image} alt="" />
          <p>{p.title}</p>
          <p>{p.price}</p>
        </div>
      })
    }
    </>
  )
}

export default App
