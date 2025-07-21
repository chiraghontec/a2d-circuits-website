import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - a2d Circuits</title>
        <meta
          name="description"
          content="Learn about a2d Circuits - founded in 2005, we are your trusted partner for rare and obsolete electronic components."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[var(--color-warm-white)] min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[var(--color-black)]">
              About a2d Circuits
            </h1>
            <p className="mt-4 text-lg text-[var(--color-charcoal-gray)]">
              Founded in 2005 by electronics enthusiast Alex Johnson, a2d Circuits was born from a vision to provide access to rare and obsolete electronic components. What started as a small workshop has blossomed into a globally trusted source for engineers, hobbyists, and businesses. Our unwavering commitment to quality and customer satisfaction remains the cornerstone of our success.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-black)]">
              Our Mission
            </h2>
            <p className="mt-4 text-center text-lg text-[var(--color-charcoal-gray)]">
              To be the premier provider of unique and hard-to-find electronic components, empowering our customers to innovate and create. We are dedicated to delivering exceptional service, maintaining a vast and diverse inventory, and continually expanding our offerings to meet the dynamic needs of the electronics industry.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--color-black)]">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div 
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHGQbeqVqIaLL8zvmS--5P0M9iQayOv78_RbSTQmpW6wAwhshs9Vx9hzW4Cp3-2oXu9t3OxL3snFsbntDPdxpFnZ9MmH1EH_E03uE2nyd4-038n9miPfQbriN08VEkpQw57k_9UacR2ArFQkWuF4cOBTKMfYafAK5lR6noxYYP3pfz3eY3alJca03zKktYm7uds3zCK6HONU6nXOj_YlxrN20Wh1R3Fc-Zr-wyPrh9OUCtKkvhz_tyiQ60EKlySXyVO1TpOycBXP4")`
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">Alex Johnson</h3>
                <p className="text-[var(--color-charcoal-gray)]">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div 
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMaqCVbfhxdwiFpFlboGDaTQ4thdvuy90QyHsraPEZieQnu3xPtNjyDTKKrAGU6OcEKZXAqMpJhkewU6WUOnNclGet_KFfhMY_QK7LD0MyVw0ujyF1nr15va6LtSyuWbQLfT9gw9YUVNJgBWpuTxw9zZr4ca64sl-7AIn2aVcrp7hCDrx9q7UWnU8O7EwNUjXdiq7PvI0BXcBHOqfzKLZGIcIyuXj0s3Fz9jBcwSY0R_qJU6QjixqexcDbq31045z2FGiD6H1Hcok")`
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">Sarah Lee</h3>
                <p className="text-[var(--color-charcoal-gray)]">Operations Manager</p>
              </div>
              <div className="text-center">
                <div 
                  className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwYbWeOXVB3coCliBCwr8lJxfqRvoHaF_vZtfhZSV8ItBnbch-gPuMJ9EbQ_EC-tufxLP_yaMLr37jY_E4HWlTrsU3OavMMeDMbom_L35XtmfHGGClF_i0HGjOBH-tP4bMggHq1FhE0wddSpgFPaGUNu5gEnnw75WgDEbhp7sfU0tzTX80g3twUHWLCniDCBMjwmBHyn1q8fRiArH2eoyxXyJisOh3iHEv5E_JXIufmF_4WI3X1qXdsXEOtggdx5qUMleLU8-v6nw")`
                  }}
                />
                <h3 className="text-lg font-bold text-[var(--color-black)]">Mark Davis</h3>
                <p className="text-[var(--color-charcoal-gray)]">Technical Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values and Certifications Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-[var(--color-black)]">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[var(--color-black)]">Integrity</h3>
                    <p className="text-[var(--color-charcoal-gray)]">
                      We operate with honesty and transparency in all our dealings.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[var(--color-black)]">Quality</h3>
                    <p className="text-[var(--color-charcoal-gray)]">
                      We ensure the highest standards in our products and services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[var(--color-black)]">Customer Focus</h3>
                    <p className="text-[var(--color-charcoal-gray)]">
                      We are dedicated to meeting and exceeding customer expectations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-[var(--color-black)]">
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-square w-full rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqLFqouAmWVyA-wtEZroCDxcgv7AOtKM7GVqJ1sRab3d5Q51euGRsevUL3x0u4uSgM57m4cpp1aj3TRQoxNTOfJZ29baBiFbBz2nNcbGmHh1ISDiV94Ak6beAlf70GO5oHfO-K_yOdukrKSfYxt5sCNTZ-bOdZoVJOYZvjNx_Mb1f3Y7UDoo_q5kGiw0nHC5rb7fAEA4WNGz9YWTFXNOtQYoZ-Z54Ka_hKBwM3OlFml7MB-sx6i05QWC_ipR74HGGCm6yT6Wewb_Y")`
                  }}
                />
                <div 
                  className="aspect-square w-full rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-5MIxEwmYJX7aCH58ehgo-MGsXsrQ-X1soDg_THUMWgcaO5r5VuZTS205Pg__MKtwzcCyGi_8t13ggzeSMKuGI4xUSA79A_k5C0gmrB7YfIBad3kV2oWXCTc1sTf6zQ6OW1TH4Eacn92bHcxrtCXU6quW2P8xyuwL-sn2WjJ3RDXa9x3NtZgJD6QCr4UxE62ZYdK_N_JZtE63XcV_NQTYjCdxKaYf8TTxTYMHwBamNeMgLm-q8RhBz27eL99dL6ALAFSPalO5nXw")`
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--color-black)]">
              Company Timeline
            </h2>
            <div className="relative">
              <div className="timeline-item relative pl-12 pb-8">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-black)]">2005: Company Founded</h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  a2d Circuits was established in a small workshop.
                </p>
              </div>
              <div className="timeline-item relative pl-12 pb-8">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-black)]">2010: Expanded Product Line</h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  Introduced a new line of specialized components.
                </p>
              </div>
              <div className="timeline-item relative pl-12">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-black)]">2020: Global Distribution Network</h3>
                <p className="text-[var(--color-charcoal-gray)]">
                  Expanded our reach to serve customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[var(--color-primary)] py-20 px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to find your components?
            </h2>
            <p className="mt-4 text-lg text-white">
              Get in touch with our team or explore our extensive product catalog.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="btn btn-primary bg-white text-[var(--color-primary)] hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
