import { useState,useEffect } from "react";

function Products({ searchQuery, setSearchQuery }) {

  const [product, setproduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setproduct(data));

  }, [])

  // Clear search when navigating away
  useEffect(() => {
    return () => setSearchQuery('')
  }, [setSearchQuery])

  // Filter products based on search query
  const filteredProducts = searchQuery.trim() 
    ? product.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : product

  return (
    <>
     
      <div class='flex flex-wrap gap-12 '  >
        {
          filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              return <div key={p.id}   class='border-black border border-solid rounded-lg '   >
                <img height={300} width={200} src={p.image} alt="" />
                <p>{p.title.substring(0, 13)}</p>
                <p>{p.price}</p>
              </div>
            })
          ) : (
            <p class='text-xl text-gray-500'>{searchQuery ? 'No products found matching your search' : 'Loading products...'}</p>
          )
        }
      </div>

    </>
  )
}

export default Products
