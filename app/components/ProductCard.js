'use client';

import Link from 'next/link'; 

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* prod imgag. */}
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x300/6B7280/FFFFFF?text=${encodeURIComponent(product.name)}`
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        {/* Descrp. */}
        <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
        {/* Price */}
          <div className="text-xl font-bold text-green-600">
            ₹{product.price}
          </div>

          {/* view detl. bttn */}
          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

