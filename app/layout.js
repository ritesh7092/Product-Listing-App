import './globals.css'

export const metadata = {
  title: 'Product Listing App',
  description: 'Amazing products for everyone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Applied flexbox to the body for a sticky footer */}
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              🛍️ Product Listing App
            </h1>
            <nav className="mt-2">
              <a
                href="/"
                className="text-blue-600 hover:text-blue-800 mr-4"
              >
                Home
              </a>
              <a
                href="/products"
                className="text-blue-600 hover:text-blue-800"
              >
                Products
              </a>
            </nav>
          </div>
        </header>
        {/* Used flex-grow to make the main content expand and push the footer down */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center py-8 mt-16">
          <p>&copy; 2024 Product Store. Built with Next.js & Tailwind CSS By Ritesh Raj Tiwari</p>
        </footer>
      </body>
    </html>
  )
}