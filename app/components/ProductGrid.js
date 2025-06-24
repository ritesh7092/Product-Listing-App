'use client'; 

import ProductCard from './ProductCard'

// This component renders a responsive grid of product cards..
export default function ProductGrid({ products }) {
  return (
    <div className="w-full">
      {/* Used Grid Container for responsive Design */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* If no data found */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            Check back later for amazing products!
          </p>
        </div>
      )}
    </div>
  )
}