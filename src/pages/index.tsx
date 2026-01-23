import Header from "@/components/Header";
import Image from "next/image";

const categories = [
  { name: "Microcontroller", image: "/rspro.jpg" },
  { name: "Sensors", image: "/IR Sensor.jpg" },
  { name: "RC", image: "/dcbrush.jpg" },
  { name: "Cooling Fans", image: "/SanAce 120L Fan.png" },
  { name: "Motors", image: "/NBM DC Fan.png" },
];

const products = [
  {
    id: 1,
    name: "W1209 Digital Temperature Controller Module",
    price: "Rs. 84.96",
    image: "/rspro.jpg",
  },
  {
    id: 2,
    name: "W1209 Digital Temperature Controller Module",
    price: "Rs. 84.96",
    image: "/dcbrush.jpg",
  },
  {
    id: 3,
    name: "W1209 Digital Temperature Controller Module",
    price: "Rs. 84.96",
    image: "/fire alarm.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-36">
        {/* ================= CATEGORIES ================= */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>

          <div className="flex flex-wrap justify-center gap-10">
            {categories.map((cat) => (
              <div key={cat.name} className="flex flex-col items-center gap-2">
                <div className="h-20 w-20 rounded-full overflow-hidden shadow">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="bg-gray-50 py-12 px-6">
          <h2 className="text-center text-2xl font-semibold text-orange-500 mb-8">
            Featured Products
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters */}
            <aside className="bg-white p-4 rounded-lg shadow h-fit">
              <h3 className="font-semibold mb-3">Filters</h3>
              {["Type A", "Type B", "Type C", "Type D"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 text-sm mb-2"
                >
                  <input type="checkbox" />
                  {type}
                </label>
              ))}
            </aside>

            {/* Products */}
            <div className="md:col-span-3 space-y-10">
              {["Type A", "Type B", "Type C", "Type D"].map((type) => (
                <div key={type}>
                  <h3 className="font-semibold mb-4">{type}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow flex flex-col items-center hover:shadow-lg transition"
                      >
                        <div className="relative h-32 w-full mb-3">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>

                        <p className="text-sm text-center">
                          {product.name}
                        </p>
                        <p className="text-orange-500 font-semibold mt-2">
                          {product.price}
                        </p>

                        <button className="mt-3 bg-orange-500 text-white text-sm px-4 py-1 rounded hover:bg-orange-600">
                          Add to cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="py-16 text-center px-6">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            About Us
          </h2>
          <h3 className="font-semibold mb-4">Sub Heading</h3>
          <p className="max-w-3xl mx-auto text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut
            perferendis mollitia, exercitationem quia assumenda tempore
            architecto, officiis eveniet nulla.
          </p>
        </section>
      </main>
    </>
  );
}
