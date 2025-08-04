
import React from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-[var(--bg)] shadow-lg rounded-lg p-4 flex flex-col hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="text-[var(--fg)] text-lg font-semibold mb-2">
        {product.title.slice(0, 60)}
        {product.title.length > 60 ? "…" : ""}
      </h3>
      <p className="text-gray-600 flex-grow">
        {product.description ? product.description.slice(0, 100) : ""}…
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[var(--fg)] font-medium">${product.price}</span>
        <button className="bg-[var(--btn-bg)] text-white px-3 py-1 rounded hover:opacity-90 transition">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
