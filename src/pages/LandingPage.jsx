// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-panel to-panel-dark text-white">
      {/* hero wrapper */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl lg:pt-16">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Secure Transactions <br />with Escrow
          </motion.h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Trust, protect and save time with Dealcross escrow services.
          </p>

          <div className="mt-10 flex gap-6">
            <Link to="/start-deal" className="btn-primary-sm px-6 py-3 text-base">Start a deal</Link>
            <Link to="#how"        className="btn-secondary-sm px-6 py-3 text-base">Learn more</Link>
          </div>
        </div>

        {/* giant illustration */}
        <motion.img
          src="/escrow-hero.svg"              /* stub – replace later */
          alt=""
          className="mt-16 lg:mt-0 w-full max-w-md mx-auto"
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .7 }}
        />
      </div>

      {/* decorative grid */}
      <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.03] mask-fade-y" />
    </section>
  );
}
