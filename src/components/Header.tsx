import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchOverlay from "./SearchPanel";
import { Search, ShoppingCart, Heart, Phone, User } from "lucide-react";

export default function Header() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
const [searchOpen, setSearchOpen] = useState(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?search=${query}`);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-[var(--color-primary)]">a2d</span>
          <span>Circuits</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-xl overflow-hidden rounded-full border bg-gray-50"
        >
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 bg-transparent px-4 py-2 outline-none"
          
            value={searchTerm}
onFocus={() => setSearchOpen(true)}


            onChange={(e) => setQuery(e.target.value)}
          />
          {searchOpen && (
  <SearchOverlay
    setSearchTerm={setSearchTerm}
    onClose={() => setSearchOpen(false)}
  />
)}

          <button className="bg-[var(--color-primary)] px-5 text-white">
            <Search size={18} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <Link href="/login" className="flex items-center gap-1 hover:text-black">
            <User size={18} /> Login
          </Link>

          <Link href="/cart" className="flex items-center gap-1 hover:text-black">
            <ShoppingCart size={18} /> Cart
          </Link>

          <Link href="/saved" className="flex items-center gap-1 hover:text-black">
            <Heart size={18} /> Saved
          </Link>

          <Link href="/contact" className="flex items-center gap-1 hover:text-black">
            <Phone size={18} /> Contact
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex gap-10 px-6 py-3 text-[15px] font-medium text-gray-700">
        <Link href="/products" className="hover:text-black">
          All Products
        </Link>
        <Link href="#">Microcontroller</Link>
        <Link href="#">Sensors</Link>
        <Link href="#">RC</Link>
        <Link href="#">Cooling Fans</Link>
        <Link href="#">Motors</Link>
      </nav>
    </header>
  );
}
