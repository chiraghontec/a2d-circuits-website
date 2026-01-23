'use client';

import { Heart, Share2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const wishlistItems = [
  {
    id: 1,
    image: '/images/screenshot-202026-01-23-20at-202.png',
    title: 'W1209 Digital Temperature Controller Thermostat Module',
    price: 84.96,
    isSaved: true,
  },
  {
    id: 2,
    image: '/images/screenshot-202026-01-23-20at-202.png',
    title: 'W1209 Digital Temperature Controller Thermostat Module',
    price: 84.96,
    isSaved: true,
  },
  {
    id: 3,
    image: '/images/screenshot-202026-01-23-20at-202.png',
    title: 'W1209 Digital Temperature Controller Thermostat Module',
    price: 84.96,
    isSaved: true,
  },
  {
    id: 4,
    image: '/images/screenshot-202026-01-23-20at-202.png',
    title: 'W1209 Digital Temperature Controller Thermostat Module',
    price: 84.96,
    isSaved: true,
  },
  {
    id: 5,
    image: '/images/screenshot-202026-01-23-20at-202.png',
    title: 'W1209 Digital Temperature Controller Thermostat Module',
    price: 84.96,
    isSaved: true,
  },
];

export default function WishlistPage() {
  return (
    <div >
    

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48">
        {/* Title */}
        <h1 className="text-3xl font-bold text-orange-500 mb-8">My Wishlist (5)</h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow"
            >
              {/* Product Image Container */}
              <div className="relative w-full h-48 mb-4 flex items-center justify-center bg-gray-50 rounded-md">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-32 h-32 object-contain"
                />

                {/* Heart Icon - Top Right */}
                <button className="absolute top-3 right-3 text-red-500 hover:text-red-600">
                  <Heart size={24} fill="currentColor" />
                </button>

                {/* Share Icon - Bottom Right */}
                <button className="absolute bottom-3 right-3 p-1.5 border border-gray-300 rounded-full bg-white hover:bg-gray-50">
                  <Share2 size={16} className="text-gray-600" />
                </button>
              </div>

              {/* Product Title */}
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>

              {/* Price */}
              <p className="text-xl font-bold text-orange-500 mb-4">
                Rs.{item.price.toFixed(2)}
              </p>

              {/* Add to Cart Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={18} />
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
