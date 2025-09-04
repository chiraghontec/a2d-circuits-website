import { CardHoverEffectDemo } from "@/components/ProductCard";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "ic123",
    name: "Integrated Circuit - IC123",
    code: "IC123",
    price: "$5.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbOMVU_UZ_VWY4-M8GGBYGHwjmBMLZEpCP2eZ7HrdSLpJQQONFQc4LhBtqXWTaLSi2-_O2iKVW8aSkhglSObKPWA2rbITCb_wB-ctacRZD4fgiWyTt4gyWLLodFzuYI8ffhcdLytq_c-45zTUZx6g_M4O2nejrOKjHdXQ1KcF1Kzbdf4-sZw13pWiYGQvGmLNJU_-MZYp-Y9GpTdpXUryEZ5tasaMg-WoJJWpwGqqEzVngtZVW1Puzn4paP3PaxcSKEBoJQButDAQ",
    alt: "Integrated Circuit",
  },
  {
    id: "tr456",
    name: "Transistor - TR456",
    code: "TR456",
    price: "$2.49",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6OPfetVPU0lEF9mIN79lZMHHpPJ_b3XM8x0EQaDbVO1kcMIgARUeWd984RlqPuN_bZiMIAY-tkLkq07qui_AZtnSSoDnay-O2om06bAK3og0MgVgwUwK6it9v74S386muVJQHVHxTliojgo3G5namV2Tt3bx8OTVPZ_HRSDu7JN7D8tmGLaIRAutAjcZk9i-Xw3zh-3viWupKchqIqrn76dHvYmm54LuyGqQ-xrPYEnKZm8L-EF5KGZv_kyIhAdF9TcMEWbf1sbc",
    alt: "Transistor",
  },
  {
    id: "cp789",
    name: "Capacitor - CP789",
    code: "CP789",
    price: "$0.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-A6rt1IMcYzf42UVqEbIkfW46yS67X5Y-jjxscs_AJMP3n5DiMVocsF1QKp-8FVWDiD93RAF53X9qMzovf7DhcjmGvKcXZU_wpCAUNwU_N6Zk_eyeNAUBaPa1sTrAOG76tkjTQN1HvC2xwId_zqt59XD83pUwqpRLInR5GN2dPPkxmAvUma3sW_YrUJFKXIoljsCX_RAhiOSAyPxGC6bbmGIIYGDxFhClkohyUBcQrjWab11ix8saZnLAWxGwNDW-YGNH8hyvpkU",
    alt: "Capacitor",
  },
  {
    id: "rs012",
    name: "Resistor - RS012",
    code: "RS012",
    price: "$0.49",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcm3y7RGHmJDtDsUQuQobpQ3K3kcfDUCCfgn_pSYQyVx9N01aoIzBbDQHLFBFORZmvo3z51koN6cAdlOZlEd2MgfsJ6MzvrZfJF0yRFazuCvQXsq_kgQVchMuHjeRGfI6GUSbjSgaVRkQ7R9_iqsuEuYhDjaNA_0VYoU2GIQXLgGadF3n2XTTPdcKJFril_NE6TTtjTbimzcqCHxnLAjWbT7Ezj8MngAUWy4Ds4zae3eurGNOctyCp1bHdcgrYjX9e6LADaA02Gc4",
    alt: "Resistor",
  },
  {
    id: "dd345",
    name: "Diode - DD345",
    code: "DD345",
    price: "$1.29",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-BfJ99pOeazZMiJCnKR8SI53P-A6owNxPtY0CsY3zYWOxuQQTWvMOpf5DO671WFeWqjEDeZ5v3OZyDktLm7I-c8Cl9lXqd7SalFGtLVYlrgxP-dIXyWu0rKt8_pyGtYU4jVNFtc18YLG8wfNAts7LWZcWwi6UNxspzqB1bfjyVB-gNTsuk-VTDdP4rM6RJHcMr6urYV0G9t99B8a4DPK4Rw1TmWYv1T3xlilGeN2KFsSekAduuGh1ZgpmIYb8Y4ntXPLDP68Qb2Y",
    alt: "Diode",
  },
  {
    id: "in678",
    name: "Inductor - IN678",
    code: "IN678",
    price: "$3.79",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAAihZ6RwdszGqZK9sSpMQuUGEkTEGG38qidTnrxzV-sOd1KuBpnj-7fc6-qwEUjp_aG8oHrzWdhVb07Ld3wiREkw4WaPgNessVezrDuRgFxmijl3732qgsLbhZurHqkZcGnD3awp33jfBvAeQeTBefnhgfo_WERZAI-Vgn0uL-DOMk8TB_w1OIiuWohUyX5_GrUzF61vSVUzm5IKD4jOJRm4wldA7IFZ2oEoiO4ncagzSSKAu5uN01zSHZu-pul7W7CUbwBmQZTA",
    alt: "Inductor",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Products - a2d Circuits</title>
        <meta
          name="description"
          content="Browse our extensive collection of unique and obsolete circuit components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-gray-500 hover:text-[var(--color-black)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      fillRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-[var(--color-black)] font-medium">
                    All Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 max-w-3xl mx-auto text-center sm:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-[var(--color-black)] leading-tight drop-shadow-sm">
              All Products
            </h1>
            <p className="mt-3 text-lg text-[var(--color-charcoal-gray)] max-w-xl mx-auto sm:mx-0 font-light leading-relaxed">
              Browse our extensive collection of{" "}
              <span className="font-semibold text-[var(--color-primary)]">
                unique
              </span>{" "}
              and{" "}
              <span className="italic text-[var(--color-secondary)]">
                obsolete
              </span>{" "}
              circuit components
            </p>
          </header>
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-2xl bg-white bg-opacity-40 backdrop-blur-md shadow-lg max-w-xl mx-auto">
            <div className="flex-1 max-w-md">
              <input
                type="search"
                aria-label="Search components"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-300 text-[var(--color-black)] placeholder-gray-400 placeholder-opacity-70 py-3 px-1 text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 font-medium"
              />
            </div>
            <div className="flex items-center gap-6">
              <button
                aria-label="Select category"
                className="flex items-center gap-2 pb-1 border-b-2 border-gray-300 text-[var(--color-black)] font-semibold text-sm hover:border-[var(--color-primary)] transition-colors duration-300 focus:outline-none focus:border-[var(--color-primary)]"
              >
                Category
                <svg
                  className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </button>
              <select
                aria-label="Sort options"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-b-2 border-gray-300 text-[var(--color-black)] text-sm font-semibold py-2 pl-2 pr-8 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <>
            <div>
              <CardHoverEffectDemo />
            </div>
          </>

          {/* Pagination */}
          <nav
            aria-label="Pagination"
            className="mt-12 flex items-center justify-center border-t border-gray-200 pt-8"
          >
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <button
              aria-current="page"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 text-white bg-[var(--color-primary)] text-sm font-medium z-10 mx-1"
            >
              1
            </button>
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              2
            </button>
            <button className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              3
            </button>
            <span className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 text-sm font-medium mx-1">
              ...
            </span>
            <button className="hidden md:inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium mx-1">
              8
            </button>
            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 text-gray-500 hover:bg-gray-100 transition-colors">
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
