export default function CategorySidebar() {
  const categories = [
    { name: "Microcontroller", img: "/categories/microcontroller.png" },
    { name: "Sensors", img: "/categories/sensors.png" },
    { name: "RC", img: "/categories/rc.png" },
    { name: "Cooling Fans", img: "/categories/fan.png" },
    { name: "Motors", img: "/categories/motor.png" },
  ];

  return (
    <aside className="w-64 h-[90vh] border rounded-xl p-4 flex flex-col gap-6 overflow-y-auto sticky top-6 bg-white shadow-sm">
      {categories.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
        >
          <div className="w-28 h-28 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src={item.img}
              alt={item.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <p className="font-semibold text-blue-900 text-lg">
            {item.name}
          </p>
        </div>
      ))}
    </aside>
  );
}
