export default function QuantitySelector({ qty, onChange }) {
  return (
    <div className="flex items-center gap-2 border rounded px-3 h-fit">
      <button
        onClick={() => qty > 1 && onChange(qty - 1)}
      >
        -
      </button>

      <span className="min-w-[20px] text-center">{qty}</span>

      <button
        onClick={() => onChange(qty + 1)}
      >
        +
      </button>
    </div>
  );
}
