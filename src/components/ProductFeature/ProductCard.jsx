import React from "react";
import toast from "react-hot-toast";
import { FaOpencart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <>
      <div
        key={product._id}
        className="bg-white border rounded-lg shadow-md p-4 transition transform hover:scale-105 duration-300"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-[#F63E7B]">${product.price}</p>
            <button
              className="px-3 py-1 text-sm text-white bg-[#F63E7B] rounded-md"
              onClick={() => {
                toast.success("Added to cart");
              }}
            >
              Add to Cart <FaOpencart className="inline-block mr-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
