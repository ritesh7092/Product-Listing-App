import { getProductById, products } from '../../../app/data/products';
import ProductDetailsClient from './ProductDetailsClient';


export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  return <ProductDetailsClient product={product} products={products} />;
}

// Generating static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Dynamic metadata for seo
export async function generateMetadata({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found - Product Store',
    };
  }

  return {
    title: `${product.name} - Product Store`,
    description: product.description,
  };
}
