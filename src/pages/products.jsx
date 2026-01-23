import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
const categories = [
  { name: "Microcontroller", img: "/categories/microcontroller.png" },
  { name: "Sensors", img: "/categories/sensors.png" },
  { name: "RC", img: "/categories/rc.png" },
  { name: "Cooling Fans", img: "/categories/fan.png" },
  { name: "Motors", img: "/categories/motor.png" },
];

const products = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: "W1209 Digital Temperature Controller Thermostat Module",
  price: "Rs. 84.96",
  img: "/products/w1209.png",
}));

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Microcontroller");


  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <div className="min-h-screen bg-gray-50 pt-28 px-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <h1 className="text-2xl font-semibold text-blue-900">category name</h1>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

       
        <div className="flex gap-10">

          {/* Sidebar */}
          <aside className="w-64 h-[75vh] sticky top-28 bg-white border rounded-xl p-4 overflow-y-auto">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex flex-col items-center mb-6 cursor-pointer transition 
                  ${activeCategory === cat.name ? "scale-105" : "hover:scale-105"}`}
              >
                <div className="w-28 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src={cat.img} className="max-h-full object-contain" />
                </div>
                <p className="mt-2 font-semibold text-blue-900">{cat.name}</p>
              </div>
            ))}
          </aside>

          {/* Products */}
          <div className="flex-1 grid grid-cols-3 gap-10">
            {products.map((p) => (
  <Link key={p.id} href={`/product/${p.id}`}>
    <div className="bg-white border rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition">

                <div className="relative h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img src={p.img} className="h-full object-contain" />
                  <div className="absolute top-2 right-2 space-y-2 text-gray-500">
                    <button>♡</button>
                    <button>⇄</button>
                  </div>
                </div>

                <h3 className="text-sm font-medium text-blue-900 mb-2">
                  {p.name}
                </h3>

                <p className="text-red-600 font-bold mb-3">{p.price}</p>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  🛒 Add to cart
                </button>

              </div>
              </Link>
            ))}
         
          </div>
          
        </div>
      
      </div>
      
    </>
  );
}

