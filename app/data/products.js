export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/images/Headphone.jpg", 
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/images/smart-watch.jpg",
    description: "Feature-rich smartwatch with health monitoring"
  },
  
  {
    id: 3,
    name: "Classic Wrist Watch",
    price: 599.99,
    image: "/images/wrist-watch.jpg", 
    description: "Premium classic wrist watch"
  },
   {
    id: 4,
    name: "Earbuds",
    price: 99.99,
    image: "/images/earbuds.jpg", 
    description: "High-quality Earrbuds with premium look"
  },
   {
    id: 5,
    name: "Dell Laptop",
    price: 59999.99,
    image: "/images/dell-laptop.jpg", 
    description: "New launched octacore dell sp5900 best for office work"
  },
  
];

export function getProductById(id) { 
  return products.find(product => product.id === parseInt(id));
}

