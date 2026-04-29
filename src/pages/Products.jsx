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
     
      <div class='flex flex-wrap gap-12 '  >

        {
          product.map((p) => {
            return <div key={p.id}   class='border-black border border-solid rounded-lg '   >
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
