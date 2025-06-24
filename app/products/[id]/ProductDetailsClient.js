'use client';

import Link from 'next/link';
import { products } from '../../../app/data/products';

export default function ProductDetailsClient({ product }) {
  if (!product) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-4">😞</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // --- Related-products logic ---
  const sorted = products.slice().sort((a, b) => a.id - b.id);
  const idx = sorted.findIndex(p => p.id === product.id);

  let related = [];
  if (idx !== -1 && sorted.length > 1) {
    // prev / next with wrap
    const prev = sorted[idx - 1] ?? sorted[sorted.length - 1];
    const next = sorted[idx + 1] ?? sorted[0];

    // best-suited = closest in price (excluding current, prev, next)
    const pool = sorted.filter(p =>
      p.id !== product.id &&
      p.id !== prev.id &&
      p.id !== next.id
    );

    let best = pool[0];
    if (pool.length > 0) {
      best = pool.reduce((bestSoFar, p) => {
        return Math.abs(p.price - product.price) <
               Math.abs(bestSoFar.price - product.price)
          ? p
          : bestSoFar;
      }, pool[0]);
    }

    related = [prev, next, best].filter(Boolean);
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* back bttn */}
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Products
        </Link>
      </div>

      {/* prod detai. */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-gray-50 p-8 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg shadow-md"
                onError={e => {
                  e.target.src = `https://via.placeholder.com/400x400/6B7280/FFFFFF?text=${encodeURIComponent(product.name)}`;
                }}
              />
            </div>
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-1">Price</div>
              <div className="text-4xl font-bold text-green-600">
                ₹{product.price}
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                🛒 Add to Cart
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                ❤️ Add to Wishlist
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ High Quality Materials</li>
                <li>✅ Fast Shipping</li>
                <li>✅ 7-Day Return Policy</li>
                <li>✅ 1 Year Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Related Products
        </h2>
        {related.length === 0 ? (
          <p className="text-gray-600">No related products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map(p => (
              <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-32 bg-gray-100 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.src = `https://via.placeholder.com/400x400/6B7280/FFFFFF?text=${encodeURIComponent(p.name)}`;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      ₹{p.price}
                    </span>
                    <Link
                      href={`/products/${p.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

