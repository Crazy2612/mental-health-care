import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SustainableProductFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock product data
  const products = [
    { id: 1, name: 'Reusable Water Bottle', category: 'home', price: 20, rating: 4.5 },
    { id: 2, name: 'Organic Cotton T-Shirt', category: 'clothing', price: 30, rating: 4.2 },
    { id: 3, name: 'Bamboo Toothbrush', category: 'personal', price: 5, rating: 4.0 },
    { id: 4, name: 'Solar Power Bank', category: 'electronics', price: 50, rating: 4.7 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || product.category === selectedCategory)
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Sustainable Product Finder</h1>
      <div className="mb-6 flex">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search for sustainable products..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          className="p-2 border border-gray-300 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="home">Home & Energy</option>
          <option value="clothing">Clothing & Fashion</option>
          <option value="personal">Personal Care</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={`https://source.unsplash.com/featured/?${product.name.replace(' ', ',')}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-green-600 font-bold mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{product.rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default SustainableProductFinder;