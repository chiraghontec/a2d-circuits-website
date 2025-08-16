import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <title>a2d Circuits - Reviving Rare Circuits, Powering Innovation</title>
        <meta
          name="description"
          content="We specialize in unique and obsolete electronic circuit components, fueling the future of technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>

      {/* Hero Section */}
      <header className="relative h-full min-h-[650px] text-white sm:pt-4 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] "
          style={{
            backgroundImage: `url("./circuit-bg.jpg")`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex-grow flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <div className="relative sm:h-[300px] sm:w-[300px] h-32 w-32 mx-auto sm:-mb-20 -mb-8">
                <Image
                  src="/a2d-logo.png"
                  alt="a2d Circuits Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide uppercase">
                Reviving Rare Circuits,{' '}
                <span className="text-[var(--color-primary)]">
                  Powering Innovation
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-light-gray)]">
                We specialize in unique and obsolete electronic circuit
                components, fueling the future of technology.
              </p>
              <Link href="/products" className="btn btn-primary mt-10 inline-block">
                Explore Our Collection
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Products Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--color-black)]">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--color-charcoal-gray)]">
            Discover our curated selection of premium, hard-to-find components.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="High-performance circuit board"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxGaZAxxtZhvRPWsRQPlXv_VlG6g7ZCOyGnWd2AtYeolRPjAtvzUCziezjMnp8z9_YowrxZSuEOUEOTZ2jexXevqyoO90jVvntWbsmdhxxTNZJ2Z5SaXrUXi_uktnE6V5pZeeCYIEDPA4eZhRSLi4yY41S5a6IbTUPDW0quil6SRRqKr9BwnqGV2B7ZyoglGC4zigXs0XCFFXS4iaephFoobbGYjkhalgGy1XbHlO0kIzI1Ev-Js9w-XNlOo87stkjESsauUYAF80"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  Product A
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  High-performance circuit board for specialized applications.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href="/products/product-a" className="btn btn-outline text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="Rare electronic component"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8nJgFJN-yPcRcDEmH6TrSW0TSrcpSg1OzfTIE3aktv9a4xplY_bmdBQRzIezvzNKoFdmApMcJmJ_2CnXrxbAT_4gBi_LqR7eo2Sa-K9_MSs3FQPn03WYmGu2vEM8ZIDB_YD65yVdp3dIyxbttj4S-HwGqjcWi4v-n7lXDAlwYBcn5YZcLT5gAfg8PtDaDOn9mN7EXkHqdKR0Ylh2Szv5Hk0yAZJxv4cq0JnQ2eBMzEd3JkIF7_lqoOdGeb44-rjeiFszEcpV0JI"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  Product B
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  Rare electronic component for legacy systems.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href="/products/product-b" className="btn btn-outline text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative">
                <img
                  alt="Obsolete circuit board"
                  className="w-full h-56 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK_pzVqFU-qNCID1O0K8e3L0yIxW-eN4M9yloNZIebyYCG04dRcjtsrngrHtDDir8xWvxmhA6FFlpGSBe0WDhxY0EhEkZVrYrr3UpD62VibNRGxe1jR5y9O7ICyaxsgI14LhycIoUKWwhtJ176AnFVCGySCqXzSgFnfjY5DOCc6XH9HEhixCC14yeHxU3Gn9jVUNmaamMb_3eZTfk53m7srWg6VE-bzqoTlYMzb5A6AnJBF7Wb1jKh-jvDy0mT0L7W0ZWGaumRwfU"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[var(--color-black)]">
                  Product C
                </h3>
                <p className="mt-2 text-[var(--color-charcoal-gray)]">
                  Obsolete circuit board for repair and maintenance.
                </p>
                <div className="mt-4 flex justify-end">
                  <Link href="/products/product-c" className="btn btn-outline text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-black)]">
                Rare & Obsolete Components
              </h3>
              <p className="mt-2 text-[var(--color-charcoal-gray)]">
                We source hard-to-find and obsolete electronic components,
                ensuring your projects stay on track.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m12 7.5v-1.5m-12-6.75v-1.5m6 18.75v-1.5m-6.75-9.75h1.5m9.75 0h1.5m-4.5 4.5h1.5m-6.75 0h1.5m-1.5 4.5h1.5m6.75-4.5h1.5m-4.5 0h.008v.008h-.008v-.008zm-4.5 0h.008v.008h-.008v-.008zm4.5 4.5h.008v.008h-.008v-.008zm-4.5 0h.008v.008h-.008v-.008z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-black)]">
                Expert Technical Support
              </h3>
              <p className="mt-2 text-[var(--color-charcoal-gray)]">
                Our team of experts provides technical support to help you find
                the right components for your needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5v-4.5m0 0a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM15 9.75a3 3 0 000-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-black)]">
                Fast Global Shipping
              </h3>
              <p className="mt-2 text-[var(--color-charcoal-gray)]">
                We offer fast and reliable global shipping to get your
                components to you quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-24 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-black)]">
                Get in Touch
              </h2>
              <p className="mt-4 text-[var(--color-charcoal-gray)]">
                Have questions or a specific component need? We&apos;re here to help.
              </p>
              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    className="w-full bg-[var(--color-light-gray)]/50 border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="w-full bg-[var(--color-light-gray)]/50 border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <input
                  className="w-full bg-[var(--color-light-gray)]/50 border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="Subject"
                  type="text"
                />
                <textarea
                  className="w-full bg-[var(--color-light-gray)]/50 border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="Message"
                  rows={5}
                />
                <div className="text-right">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col h-full">
              {/* Interactive Map */}
              <div className="h-80 w-full rounded-lg overflow-hidden shadow-md mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4043469358926!2d-122.41941968460486!3d37.774929079758764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1642634739123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="a2d Circuits Location"
                />
              </div>
              
              {/* Contact Information */}
              <div className="bg-[var(--color-warm-white)] rounded-lg p-6 flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-black)] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">Phone</p>
                      <p className="text-[var(--color-charcoal-gray)]">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">Email</p>
                      <p className="text-[var(--color-charcoal-gray)]">info@a2dcircuits.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">Business Hours</p>
                      <p className="text-[var(--color-charcoal-gray)]">Mon-Fri, 9am-5pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-black)]">Address</p>
                      <p className="text-[var(--color-charcoal-gray)]">123 Circuit Lane<br />Techville, CA 91234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
