import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-36">

        {/* ================= CATEGORIES ================= */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>

          <div className="flex justify-center gap-10">
            {["Microcontroller", "Sensors", "RC", "Cooling Fans", "Motors"].map((cat) => (
              <div key={cat} className="flex flex-col items-center gap-2">
                <div className="h-20 w-20 rounded-full bg-gray-200 shadow" />
                <p className="text-sm">{cat}</p>
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
            <aside className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Filters</h3>
              {["Type A", "Type B", "Type C", "Type D"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm mb-2">
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
                    {[1, 2, 3].map((p) => (
                      <div
                        key={p}
                        className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
                      >
                        <div className="h-32 w-full bg-gray-200 mb-3" />
                        <p className="text-sm text-center">
                          W1209 Digital Temperature Controller Module
                        </p>
                        <p className="text-orange-500 font-semibold mt-2">
                          Rs. 84.96
                        </p>
                        <button className="mt-3 bg-orange-500 text-white text-sm px-4 py-1 rounded">
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
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">About Us</h2>
          <h3 className="font-semibold mb-4">Sub Heading</h3>
          <p className="max-w-3xl mx-auto text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut
            perferendis mollitia, exercitationem quia assumenda tempore
            architecto, officiis eveniet nulla.
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-800 text-white py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

            <div>
              <h4 className="font-semibold mb-3">Shop</h4>
              <p>Link one</p><p>Link two</p><p>Link three</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <p>Link one</p><p>Link two</p><p>Link three</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Other Links</h4>
              <p>Link one</p><p>Link two</p><p>Link three</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact Details</h4>
              <p>📞 +91 9876543210</p>
              <p>📧 info@a2dcircuits.com</p>
            </div>

          </div>
        </footer>

      </main>
    </>
  );
}
