export default function WishlistCard({ item, onRemove }) {
  return (
    <div className="border rounded-lg p-4 relative bg-white">
      {/* HEART */}
      <button
        onClick={() => onRemove(item.id)}
        className="absolute top-3 right-3 text-red-500 text-lg"
      >
        ♥
      </button>

      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.name}
        className="h-40 mx-auto object-contain"
      />

      {/* NAME */}
      <h3 className="mt-4 text-sm font-medium text-gray-800">
        {item.name}
      </h3>

      {/* PRICE */}
      <p className="text-orange-500 font-semibold mt-2">
        Rs.{item.price}
      </p>

      {/* BUTTON */}
      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md flex items-center justify-center gap-2">
        🛒 Add to cart
      </button>
    </div>
  );
}
