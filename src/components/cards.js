import React, { useEffect, useState } from 'react';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      
    };

    fetchProducts();
  }, []);

  return (
    <div className="cards-container m-6 gap-4  grid-cols-6 grid-rows-4 grid">
      {products.map((product) => (
        <div key={product.id} className="card bg-orange-50 shadow-md shadow-orange-600 flex flex-col justify-between  rounded-md p-2 ">
          <img src={product.image} />
          <span className='font-bold'>Price: ${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
