// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

// 👉  use the same image, but larger
import heroLogo from "../assets/dealcross-logo.png";

export default function LandingPage() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-[#0f172a]">
      {/* hero ------------------------------------------------------------ */}
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-20 text-center">
        <img
          src={heroLogo}
          alt="Dealcross shield handshake"
          className="h-36 w-36 md:h-48 md:w-48"
        />

        <h1 className="text-4xl font-extrabold leading-tight text-[#0f172a] dark:text-white md:text-6xl">
          Secure Transactions&nbsp;<br className="hidden md:block" />
          <span className="text-blue-600">with Escrow</span>
        </h1>

        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
          Trust, protect and save time with Dealcross escrow services.
        </p>

        <Link
          to="/start-deal"
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Start a deal
        </Link>
      </div>
    </section>
  );
}
