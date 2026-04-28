import { useState,useEffect } from "react";
function Products() {

  const [product, setproduct] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setproduct(data));

  }, [])

  return (
    <>
     
      <div style={{ display: 'flex', flexWrap: "wrap", gap: "50px" }}  >

        {
          product.map((p) => {
            return <div key={p.id} style={{ border: "solid black 1px", borderRadius: "10px" }}  >
              <img height={300} width={200} src={p.image} alt="" />
              <p>{p.title.substring(0, 13)}</p>
              <p>{p.price}</p>
            </div>
          })
        }
      </div>

  

  

    </>
  )
}

export default Products
