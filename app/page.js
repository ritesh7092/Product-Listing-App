import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to Our Product Store! 🎉
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover amazing products at great prices
      </p>
      <Link 
        href="/products"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Browse Products →
      </Link>
    </div>
  )
}
