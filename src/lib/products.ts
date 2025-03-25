
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Earbuds',
    description: 'Premium sound quality with active noise cancellation.',
    price: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    id: '2',
    name: 'Sleek Smartwatch',
    description: 'Track your fitness and stay connected with style.',
    price: 249.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    id: '3',
    name: 'Ultra-thin Laptop',
    description: 'Powerful performance in a lightweight design.',
    price: 1299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    id: '4',
    name: 'Leather Notebook',
    description: 'Premium quality leather notebook for your thoughts.',
    price: 24.99,
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    id: '5',
    name: 'Fountain Pen Set',
    description: 'Elegant writing experience with premium fountain pens.',
    price: 79.99,
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    id: '6',
    name: 'Minimalist Desk Organizer',
    description: 'Keep your workspace tidy with this elegant organizer.',
    price: 34.99,
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1593956506783-c99ce2b15df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging for all your compatible devices.',
    price: 49.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618520402312-31e4011d0d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    id: '8',
    name: 'Smart Speaker',
    description: 'Premium sound with intelligent voice assistant.',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: false
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const categories = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'stationery', name: 'Stationery' },
];
