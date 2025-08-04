// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home: React.FC = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then(res => setProducts(res.data));
//   }, []);

//   return (
//     <main className="pt-20 p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
//       <p className="mb-4">This is a sample paragraph to demonstrate themes.</p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Click Me</button>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.slice(0, 6).map(product => (
//           <div key={product.id} className="border p-4 rounded shadow">
//             <img src={product.image} className="h-32 mx-auto" alt={product.title} />
//             <p className="text-center mt-2">{product.title}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card, { Product } from "../components/Card";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data.slice(0, 9));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="pt-24 bg-[var(--bg)] text-[var(--fg)] min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Welcome to Our Store
        </h2>
        <p className="text-lg sm:text-xl">
          This is a starter React app demonstrating theme switching, a styled hero area,
          and a responsive grid of product cards fetched from a public API.
        </p>
        <button className="bg-[var(--btn-bg)] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
          Explore Products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-screen-lg mx-auto">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
};

export default Home;
