'use client'

import { X, Search, User, ShoppingCart, Heart, Phone, Code2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Loading = () => null

export default function CartPage() {
  const searchParams = useSearchParams()
  const cartItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/120x120?text=Circuit+Module',
      title: 'W1209 Digital Temperature Controller Thermostat Module',
      code: 'EP22425',
      quantity: 1,
      price: 84.96,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/120x120?text=Circuit+Module',
      title: 'W1209 Digital Temperature Controller Thermostat Module',
      code: 'EP22425',
      quantity: 1,
      price: 84.96,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/120x120?text=Circuit+Module',
      title: 'W1209 Digital Temperature Controller Thermostat Module',
      code: 'EP22425',
      quantity: 1,
      price: 84.96,
    },
  ]

  const coupons = [
    {
      code: 'EORSAVE200',
      description: '25% off on minimum purchase of Rs 300',
      save: 'Save Rs 213',
    },
    {
      code: 'EORSAVE200',
      description: '25% off on minimum purchase of Rs 300',
      save: 'Save Rs 213',
    },
  ]

  return (
    <div>
     
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6  mt-48">
        <div className="grid grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Your cart</h1>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-lg p-6 flex gap-6 items-start"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-28 h-28 object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-blue-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">
                      Product Code: <span className="font-medium">{item.code}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">Qty</span>
                      <span className="border border-gray-300 px-2 py-1 text-xs font-medium">
                        {item.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-500 mb-4">
                      Rs.{item.price.toFixed(2)}
                    </p>
                    <button className="text-gray-400 hover:text-gray-600 transition">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coupons */}
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Coupons</h2>
                <button className="text-orange-500 text-sm font-bold border border-orange-500 px-4 py-1 rounded hover:bg-orange-50 transition">
                  APPLY
                </button>
              </div>

              <div className="space-y-4">
                {coupons.map((coupon, idx) => (
                  <div key={idx} className="border border-gray-200 rounded p-4 cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mb-3 accent-gray-400"
                    />
                    <p className="text-sm font-bold text-orange-500 mb-1">
                      {coupon.code}
                    </p>
                    <p className="text-xs text-orange-500 mb-2">
                      {coupon.description}
                    </p>
                    <p className="text-xs text-gray-600">{coupon.save}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Details */}
            <div className="border border-gray-300 rounded-lg p-6 mb-4">
              <h2 className="text-lg font-bold text-gray-900 mb-6">PRICE DETAILS (3)</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Total MRP</span>
                  <span className="text-gray-900 font-semibold">Rs 2,663</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Discount on MRP</span>
                  <span className="text-orange-500 text-sm">- Rs 1,011</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Coupon Discount</span>
                  <span className="text-red-500 text-sm">- Rs 250</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-6 mb-6 flex items-center justify-between">
                <span className="text-base font-bold text-gray-900">Total Amount</span>
                <span className="text-lg font-bold text-gray-900">Rs 1,243</span>
              </div>

              <button className="w-full bg-orange-500 text-white font-bold py-3 rounded text-lg hover:bg-orange-600 transition ">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export { Loading }
