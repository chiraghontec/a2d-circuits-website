import { useRouter } from "next/router";
import Navbar from "@/components/Header";

const products = [
  {
    id: 0,
    name: "W1209 Digital Temperature Controller Thermostat Module",
    code: "EP122425",
    price: "Rs. 84.96",
    stock: 1172,
    manufacturer: "Danfoss",
    mpn: "060G3582",
    category: "Transmitters",
    condition: "Brand New",
    description: "Danfoss Pressure Transmitter, MBS 3050.",
    images: ["/rspro.jpg", "/products/w1209.png", "/products/w1209.png"]
  },
];

export default function ProductDetail() {
  const { query } = useRouter();
  const product = products.find(p => p.id == query.id);

  if (!product) return null;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto pt-32 px-10 grid grid-cols-2 gap-10 mt-10">

        {/* Images */}
        <div>
          <img src={product.images[0]} className="w-full rounded-xl border mb-4" />
          <div className="flex gap-4">
            {product.images.map((img, i) => (
              <img key={i} src={img} className="w-24 h-24 border rounded-lg cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-gray-500">{product.category}</p>
          <h1 className="text-3xl font-bold text-orange-600">{product.name}</h1>
          <p className="mt-1 text-gray-500">
            Product Code: {product.code} | Availability: {product.stock}
          </p>

          <ul className="mt-6 space-y-2">
            <li><b>Manufacturer:</b> {product.manufacturer}</li>
            <li><b>MPN:</b> {product.mpn}</li>
            <li><b>Condition:</b> {product.condition}</li>
            <li><b>Technical Description:</b> {product.description}</li>
          </ul>

          <h2 className="text-4xl font-bold mt-8 text-blue-800">{product.price}</h2>

          <div className="flex items-center gap-3 mt-6">
            <button className="border px-4 py-2 rounded-lg">-</button>
            <span>1</span>
            <button className="border px-4 py-2 rounded-lg">+</button>
          </div>

          <div className="flex gap-4 mt-8 mb-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-xl">Buy Now</button>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
