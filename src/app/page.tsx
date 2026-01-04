'use client';

import { useState } from 'react';

const navItems = ['Home', 'Portfolio', 'About', 'Contact Us'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-slate-100">
      <div className="mx-auto px-6 pb-16 pt-10 md:pt-14">
        <header className="flex flex-col gap-4 border-b border-white/5 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-semibold tracking-[0.32em] text-white md:text-8xl">
              AEI<span className="text-[#d6422b]">R</span>Y
            </div>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-100 transition hover:border-white/30 hover:bg-white/5 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <nav className="hidden items-center gap-10 text-xl font-semibold uppercase tracking-[0.32em] text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                className="rounded-full px-3 py-1 transition hover:text-white hover:bg-white/5"
                href="#"
              >
                {item}
              </a>
            ))}
          </nav>

          {menuOpen && (
            <div className="md:hidden">
              <nav className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xl font-semibold uppercase tracking-[0.2em] text-slate-100 shadow-lg shadow-black/30 backdrop-blur">
                {navItems.map((item) => (
                  <a
                    key={item}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/10"
                    href="#"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        <main className="mt-10 space-y-10 md:mt-14">
          <section className="px-4 md:px-8">
            <div className="relative overflow-hidden rounded-[22px] bg-black">
              <video className="w-full h-auto" autoPlay loop muted playsInline>
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-8">
            <div className="space-y-5">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold uppercase text-white md:text-8xl">
                  Product
                </span>
                <span className="text-4xl font-light uppercase text-slate-300 md:text-8xl">
                  Design
                </span>
              </div>
              <p className="max-w-xl text-base md:text-2xl leading-relaxed text-slate-300">
                Bring your product ideas to life with stunning 3D design. We
                craft realistic, detailed models that showcase your product from
                every angle, perfect for marketing, prototyping, or
                presentations. Make your vision tangible before it hits the
                production line.{' '}
                <span className="text-[#d6422b]">Not sure where to start?</span>{' '}
                Just book an appointment right away.
              </p>
              <button className="inline-flex w-fit items-center justify-center rounded-full bg-[#ff5a1f] px-5 py-3 text-base md:text-2xl font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,90,31,0.45)]">
                Book Now
              </button>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-8">
            <div className="space-y-5">
              <h2 className="text-4xl font-extrabold uppercase text-white md:text-8xl">
                Product Showcase
              </h2>
              <p className="max-w-xl text-base md:text-2xl leading-relaxed text-slate-300">
                Experience your product like never before. Our 3D representation
                highlight every detail with precision and style perfect for
                presentations, ads, and online stores that demand a stunning
                visual impact.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
            </div>
          </section>

          <section className="flex flex-col items-center gap-8 py-8 md:p-12">
            <div className="space-y-6 text-center">
              <p className="text-base md:text-2xl text-slate-400">
                Want to showcase your product in a more{' '}
                <span className="font-semibold text-white">immersive</span> way?
              </p>
              <div className="flex items-center justify-center gap-4">
                <button className="inline-flex items-center justify-center rounded-lg bg-[#ff5a1f] px-6 py-3 text-base md:text-2xl font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_25px_rgba(255,90,31,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(255,90,31,0.45)]">
                  3D
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-base md:text-2xl font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-slate-500">
                  AR
                </button>
              </div>
              <p className="max-w-2xl text-base md:text-2xl leading-relaxed text-slate-300">
                3D product showcasing brings your product to life with
                interactive, realistic visuals that engage users and boost brand
                appeal instantly.
              </p>
            </div>

            <div className="w-full rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[2/1] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
            </div>
          </section>

          <section className="flex flex-col items-center gap-8 py-8 md:p-12">
            <h2 className="text-4xl md:text-8xl font-extrabold uppercase text-white text-center tracking-[0.1em] md:tracking-[0.2em]">
              A<span className="text-[#ff5a1f]">N</span>IMATIO
              <span className="text-[#ff5a1f]">N</span>
            </h2>
            <p className="max-w-2xl text-center text-base md:text-2xl leading-relaxed text-slate-300">
              3D product animation brings your product to life with dynamic,
              high-quality visuals. It highlights features, demonstrates
              functionality, and tells your product's story in a way that's
              engaging, clear, and impactful.
            </p>
            <div className="w-full rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[2/1] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
            </div>
          </section>

          <section className="py-8 md:p-12">
            <div className="space-y-8">
              {/* First Row: Vertical and Square Formats */}
              <div className="grid gap-16 md:grid-cols-2">
                {/* Vertical Format */}
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)] w-full max-w-md flex-shrink-0">
                    <video
                      className="w-full h-auto object-cover rounded-[22px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/vertical.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-white">
                      Vertical Format
                    </h3>
                    <p className="text-4xl md:text-6xl font-bold text-[#ff5a1f]">
                      9:16
                    </p>
                    <p className="mt-3 text-base md:text-2xl text-slate-300">
                      Experience your product like never before. Our 3D
                      representation highlight every detail with precision and
                      style perfect for presentations, ads, and online stores
                      that demand a stunning visual impact.
                    </p>
                  </div>
                </div>

                {/* Square Format */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)] w-full max-w-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,31,0.15),transparent_60%)]" />
                    <video
                      className="w-full h-auto object-cover rounded-[22px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/square.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-white">
                      Square Format
                    </h3>
                    <p className="text-4xl md:text-6xl font-bold text-white">
                      <span className="text-[#ff5a1f]">1:</span>1
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row: Landscape Format Full Width */}
              <div className="flex flex-col md:flex-row-reverse gap-4 items-start">
                <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)] w-full max-w-4xl flex-shrink-0">
                  <video
                    className="w-full h-auto object-cover rounded-[22px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos/horizontal.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase text-white">
                    Landscape Format
                  </h3>
                  <p className="text-4xl md:text-6xl font-bold text-[#ff5a1f]">
                    16:9
                  </p>
                  <p className="mt-3 text-base md:text-2xl text-slate-300">
                    Experience your product like never before. Our 3D
                    representation highlight every detail with precision and
                    style perfect for presentations, ads, and online stores that
                    demand a stunning visual impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-8 py-8 md:p-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-8xl font-extrabold uppercase text-white">
                Product <span className="font-light">Walkthrough</span>
              </h2>
              <p className="max-w-2xl text-base md:text-2xl leading-relaxed text-slate-300 text-center mx-auto">
                A 3D product walkthrough offers a detailed, interactive journey
                through your product's design and features, helping users
                explore functionality, understand usage, and experience its
                value before making a decision.
              </p>
            </div>

            <div className="grid gap-8 w-full md:grid-cols-2 md:items-center">
              <div className="rounded-[24px] border border-[#4a9eff] bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
              </div>
              <div className="space-y-5">
                <h3 className="text-4xl md:text-7xl font-extrabold uppercase text-white">
                  Explosive <span className="text-[#ff5a1f]">View</span>
                </h3>
                <p className="max-w-xl text-base md:text-2xl leading-relaxed text-slate-300">
                  An exploded view visually separates components to reveal inner
                  parts and assembly. It helps users understand structure,
                  functionality, and design with clarity that static images
                  can't offer.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-2 md:items-center md:p-8">
            <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),rgba(0,0,0,0.85))]" />
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl md:text-7xl font-extrabold uppercase text-white">
                Industrial <span className="font-light">Explainer</span>
              </h2>
              <p className="max-w-xl text-base md:text-2xl leading-relaxed text-slate-300">
                Industrial explainers showcase how products are assembled and
                disassembled through detailed 3D animations, making complex
                processes easy to understand for training, troubleshooting, or
                marketing technical equipment with precision and clarity.
              </p>
            </div>
          </section>

          <section className="grid gap-8 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:p-8">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-7xl font-extrabold uppercase text-white">
                How-To <span className="font-light">Explainer</span>
              </h2>
              <p className="max-w-xl text-base md:text-2xl leading-relaxed text-slate-300">
                Our step-by-step guide makes using your product effortless. From
                unboxing to full operation, each stage is clearly explained with
                visuals, ensuring users get started quickly and confidently
                without any confusion.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <video
                className="w-full h-auto object-cover rounded-[22px]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/howto.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-white/5 pt-10 text-center text-base md:text-2xl text-slate-400">
          <p>© 2025 Aiery - Where ideas transform</p>
        </footer>
      </div>
    </div>
  );
}
