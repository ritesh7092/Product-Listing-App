import { products } from '../data/products'
import ProductGrid from '../components/ProductGrid'


export default function ProductsPage() {
  return (
    <div>
     
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Our Products
        </h1>
        <p className="text-gray-600">
          Discover our amazing collection of {products.length} products
        </p>
      </div>

      {/* Prod grid */}
      <ProductGrid products={products} />
    </div>
  )
}

// SEO
export const metadata = {
  title: 'Products - Product Store',
  description: 'Browse our amazing collection of products',
}
