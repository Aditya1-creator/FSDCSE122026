import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0)
  const [pointer, setPointer] = useState(1000)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const jsonData = await response.json()
        console.log('JSON data:', jsonData)
        setProducts(jsonData)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>UseEffect</h2>
      <h2 style={{ color: 'red' }}>count={count}</h2>
      <h2 style={{ color: 'blue' }}>pointer={pointer}</h2>

      <button onClick={() => setCount(count + 10)}>Counter</button>
      <button onClick={() => setPointer(pointer + 10)}>Pointer</button>

      <h3>Products</h3>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default UseEffect