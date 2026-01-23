const quickFinds = ["find abc", "find bca", "find cda", "find def", "find xyz", "find hda"];
const categories = [
  { name: "Microcontroller", img: "/categories/microcontroller.png" },
  { name: "Sensors", img: "/categories/sensors.png" },
  { name: "RC", img: "/categories/rc.png" },
  { name: "Cooling Fans", img: "/categories/fan.png" },
  { name: "Motors", img: "/categories/motor.png" },
];

export default function SearchPanel({ onClose, setSearchTerm }) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="absolute z-50 mt-3 w-[750px] bg-white border rounded-xl p-6 shadow-xl">

        <h3 className="font-semibold mb-4">Quick finds</h3>

        <div className="flex flex-wrap gap-3 mb-8">
          {quickFinds.map(q => (
            <button
              key={q}
              onClick={() => {
                setSearchTerm(q);
                onClose();
              }}
              className="px-5 py-2 rounded-full border border-orange-500 text-blue-900 hover:bg-orange-50"
            >
              {q}
            </button>
          ))}
        </div>

        <h3 className="font-semibold mb-4">Categories</h3>

        <div className="grid grid-cols-3 gap-4">
          {categories.map(c => (
            <div
              key={c.name}
              onClick={() => {
                setSearchTerm(c.name);
                onClose();
              }}
              className="flex items-center gap-4 border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
            >
              <img src={c.img} className="h-14 w-14 bg-gray-100 rounded-md p-2" />
              <span className="font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
