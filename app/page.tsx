
"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Sites web professionnels",
    description:
      "Des sites modernes, élégants et adaptés aux mobiles pour développer votre présence en ligne.",
  },
  {
    number: "02",
    title: "Sites e-commerce",
    description:
      "Des boutiques en ligne pour présenter vos produits et faciliter les commandes.",
  },
  {
    number: "03",
    title: "Solutions digitales",
    description:
      "Catalogues digitaux, menus QR code et solutions adaptées à votre activité.",
  },
];

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <header className="relative z-50 flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
        <a href="#accueil" className="text-2xl font-bold tracking-wide">
          ONOVA<span className="text-violet-400"> TECH.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold transition hover:bg-violet-600 md:inline-block"
        >
          Parlons de votre projet
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/20 px-3 py-2 text-2xl text-white md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {menuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#11182b] px-6 py-7 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 transition hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-violet-500 px-5 py-3 text-center font-semibold"
            >
              Parlons de votre projet
            </a>
          </nav>
        )}
      </header>

      <section
        id="accueil"
        className="relative scroll-mt-8 px-6 py-24 text-center md:px-16 md:py-36"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />

        <div className="relative mx-auto max-w-4xl animate-fade-up">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Technology • Creativity • Innovation
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Building Your
            <span className="block text-violet-400">Digital Future.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            ONOVA TECH accompagne les petites entreprises dans leur
            transformation digitale grâce à des solutions web modernes,
            créatives et accessibles.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-600"
            >
              Découvrir nos services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-8 px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Ce que nous proposons
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Nos services digitaux
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 md:p-8"
              >
                <p className="text-sm font-bold text-violet-400">
                  {service.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="realisations"
        className="scroll-mt-8 bg-white/[0.03] px-6 py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Notre portfolio
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Nos premières réalisations
          </h2>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#11182b] p-7 md:p-12">
            <p className="text-sm text-violet-300">Projet 01 · Beauté</p>
            <h3 className="mt-4 text-3xl font-bold">ÉLÉA BEAUTY</h3>
            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              Un site vitrine élégant conçu pour présenter les prestations
              d'un institut de beauté et faciliter la prise de contact.
            </p>
            <a
              href="https://nuvora-beauty-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-violet-300 transition hover:text-violet-200"
            >
              Voir le projet →
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#11182b] p-7 md:p-12">
            <p className="text-sm text-violet-300">Projet 02 · Restauration</p>
            <h3 className="mt-4 text-3xl font-bold">LE COMPTOIR</h3>
            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              Un concept de site vitrine pour restaurant avec présentation
              du menu, des spécialités et des informations pratiques.
            </p>
            <span className="mt-8 inline-block rounded-full border border-violet-400/30 px-4 py-2 text-sm text-violet-300">
              Démo à venir
            </span>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-8 px-6 py-20 text-center md:px-16 md:py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Un projet en tête ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          Parlons de vos idées et construisons ensemble votre présence digitale.
        </p>
        <a
          href="https://wa.me/21626339144?text=Bonjour%20ONOVA%20TECH%2C%20je%20souhaite%20demander%20un%20devis."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-600"
        >
          Discuter sur WhatsApp
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 ONOVA TECH — Tous droits réservés.
      </footer>

      <a
        href="https://wa.me/21626339144?text=Bonjour%20ONOVA%20TECH%2C%20je%20souhaite%20avoir%20plus%20d'informations."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter ONOVA TECH sur WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg transition hover:scale-110 hover:bg-green-600"
      >
        <span aria-hidden="true">☏</span>
      </a>
    </main>
  );
}
