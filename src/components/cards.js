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
    <div className="cards-container gap-4 p-4 flex h-[calc(100vh-112px)] flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="card border border-2 border-black rounded-md p-2 h-[200px] w-[100px]">
          <img src={product.image} />
          <span>Price: ${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
