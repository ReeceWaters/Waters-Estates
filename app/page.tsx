"use client";

import React from "react";
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-sm">
      {children}
    </div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-8">{children}</div>;
}

function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-2xl px-8 py-4 bg-white text-black font-medium hover:bg-slate-200 transition">
      {children}
    </button>
  );
}

import { motion } from "framer-motion";

export default function WatersEstatesSite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* INTRO / OWNER PAGE */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Waters Estates</h1>
          <p className="text-xl text-slate-300 mb-6">
            A private real estate investment firm focused on smooth, predictable, and professionally structured property transitions.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I started Waters Estates out of a passion for real estate and its ability to create lasting value. Beyond financial growth,
            my mission is to build generational wealth while creating win-win outcomes for homeowners and multifamily owners through
            transparent, flexible, and well-structured transactions.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            I work directly with sellers to provide clarity, certainty, and professional execution—ensuring properties transition
            into stable, long-term ownership while honoring the legacy of well-run assets.
          </p>
        </motion.div>

        {/* Placeholder for photo */}
        <div className="w-full h-[420px] rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400">
          Founder Photo
        </div>
      </section>

      {/* OWNER STATEMENT */}
      <section className="bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Card className="bg-slate-900 border-slate-800 rounded-2xl">
            <CardContent className="p-10">
              <h2 className="text-3xl font-semibold mb-6">Owner’s Statement</h2>
              <p className="text-slate-300 leading-relaxed">
                “I started Waters Estates out of a passion for real estate and its ability to create lasting value. Beyond financial growth,
                my mission is to cultivate a career that combines entrepreneurship, investment, and meaningful impact—building
                generational wealth for my family while celebrating the creativity and opportunity inherent in every property.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                I work with homeowners and multifamily property owners to provide professional, transparent, and flexible solutions for
                selling or transitioning their properties. I focus on professional management and operational stability, ensuring the
                legacy of well-run properties continues while creating win-win outcomes for sellers.”
              </p>
              <p className="mt-6 text-slate-400">— Reece Waters, President & CEO</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RESIDENTIAL SELLERS PAGE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-6">For Homeowners & Residential Sellers</h2>
        <p className="text-slate-300 max-w-3xl mb-12">
          We specialize in structured residential purchases designed to provide certainty, monthly income, and a clear exit timeline
          without repairs, showings, or traditional sale risks.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-slate-900 border-slate-800 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Residential Seller Financing Structure</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>10% down payment at closing</li>
                <li>6-month interest-only note with balloon payoff</li>
                <li>6.5% interest paid monthly</li>
                <li>Property sold as-is with no repairs or renovations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800 rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Why Sellers Choose This</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Monthly income while waiting for full payoff</li>
                <li>Defined 6-month exit timeline</li>
                <li>No showings, inspections, or deal fall-throughs</li>
                <li>Secured by promissory note and first-position lien</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MULTIFAMILY / COMMERCIAL PAGE */}
      <section className="bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-semibold mb-6">For Multifamily & Commercial Owners</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Our annuity-style acquisition structure allows landlords to transition out of ownership while maintaining predictable,
            secured income and reducing tax pressure.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Annuity-Style Structure</h3>
                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                  <li>Fixed monthly payments based on property NOI</li>
                  <li>Typical term of 10 years</li>
                  <li>Smaller lump-sum payoff at the end of term</li>
                  <li>Secured by promissory note and first-position lien</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Why Landlords Use This Structure</h3>
                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                  <li>Consistent mailbox money without management</li>
                  <li>Tax deferral over time</li>
                  <li>No 1031 or reinvestment pressure</li>
                  <li>Estate-planning and retirement friendly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Start the Conversation</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          If you’re considering selling or restructuring a property, reach out directly for a clear and professional discussion.
        </p>
        <Button className="rounded-2xl px-8 py-4 text-base">Contact Waters Estates</Button>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Waters Estates. All rights reserved.
      </footer>
    </div>
  );
}
