import QuantitySelector from "./QuantitySelector";

export default function CartItem({ item, onRemove, onQtyChange }) {
  return (
    <div className="border rounded-lg p-4 mb-4 flex gap-4 bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="h-20 object-contain"
      />

      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">
          Product Code: {item.code}
        </p>

        <p className="text-orange-500 font-semibold mt-1">
          Rs.{item.price}
        </p>
      </div>

      <QuantitySelector
        qty={item.qty}
        onChange={(newQty) => onQtyChange(item.id, newQty)}
      />

      <button
        onClick={() => onRemove(item.id)}
        className="text-xl"
      >
        ✕
      </button>
    </div>
  );
}
