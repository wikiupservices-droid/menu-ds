import React, { useState } from 'react';
import { Product } from '../types';
import { Button } from '../components/Button';
import { ExternalLink, Filter } from 'lucide-react';

const SAMPLE_PRODUCTS: Product[] = [
  { 
    id: '1', 
    title: 'Modern Burger TV Menu', 
    description: 'Dark theme digital menu board for burger joints and fast food.', 
    category: 'TV Menu', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80', 
    isBestSeller: true 
  },
  { 
    id: '2', 
    title: 'Elegant Café Price List', 
    description: 'Minimalist A4 printable menu for coffee shops and bakeries.', 
    category: 'Printable', 
    price: 8, 
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: '3', 
    title: 'Pizza Place Flyer', 
    description: 'Vibrant promotional flyer for special offers and deliveries.', 
    category: 'Flyer', 
    price: 6, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', 
    isNew: true 
  },
  { 
    id: '4', 
    title: 'Street Food Digital Board', 
    description: 'High contrast menu for outdoor screens and food trucks.', 
    category: 'TV Menu', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1565123409695-74283127b223?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: '5', 
    title: 'Fine Dining Wine List', 
    description: 'Classy, serif typography layout for premium restaurants.', 
    category: 'Printable', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: '6', 
    title: 'Ice Cream Social Pack', 
    description: '10 Instagram stories templates for summer promotions.', 
    category: 'Social', 
    price: 15, 
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80', 
    isNew: true 
  },
  { 
    id: '7', 
    title: 'Breakfast Menu Board', 
    description: 'Bright morning theme for TVs to display eggs, coffee and toast.', 
    category: 'TV Menu', 
    price: 12, 
    image: 'https://images.unsplash.com/photo-1533089862017-ec11126131ba?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    id: '8', 
    title: 'Taco Tuesday Flyer', 
    description: 'Bold and spicy design for promotions and events.', 
    category: 'Flyer', 
    price: 6, 
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80' 
  },
];

export const Templates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'TV Menu', 'Printable', 'Flyer', 'Social'];
  
  const filteredProducts = activeCategory === 'All' 
    ? SAMPLE_PRODUCTS 
    : SAMPLE_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Menu Templates</h1>
          <p className="text-gray-600 mt-2">Professionally designed, easy to edit in Canva. Buy directly on our Etsy shop.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="w-5 h-5 text-gray-400 mr-2 hidden md:block" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? 'bg-brand-dark text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            Showing {filteredProducts.length} templates
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full group">
              <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
                 <img 
                   src={product.image} 
                   alt={product.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors"></div>
                 
                 {/* Badge */}
                 {(product.isNew || product.isBestSeller) && (
                   <div className="absolute top-3 left-3 z-10">
                     {product.isNew && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">NEW</span>}
                     {product.isBestSeller && <span className="bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded shadow-sm">BEST SELLER</span>}
                   </div>
                 )}
                 {/* Overlay on hover */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary" onClick={() => window.open('https://menuds.etsy.com', '_blank')}>
                      View Details
                    </Button>
                 </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-auto">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-900">${product.price}</span>
                  <Button size="sm" variant="outline" onClick={() => window.open('https://menuds.etsy.com', '_blank')}>
                    Buy on Etsy
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};