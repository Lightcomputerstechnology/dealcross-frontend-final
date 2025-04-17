// src/pages/LandingPage.jsx
import { useNavigate }           from 'react-router-dom';
import { motion }                from 'framer-motion';
import { Briefcase, Shield, DollarSign } from 'lucide-react';

import Logo from '@/assets/dealcross‑mark.svg';   // ✅  already added earlier

const features = [
  {
    icon : <Briefcase size={28} />,
    title: 'How it works',
    text : 'Simple and secure process\nfrom start to finish',
  },
  {
    icon : <Shield size={28} />,
    title: 'Trust Levels',
    text : 'Build your reputation with\nverified business accounts.',
  },
  {
    icon : <DollarSign size={28} />,
    title: 'Fast Payouts',
    text : 'Receive your funds within\n⚡ business days.',
  },
];

const dealsInProgress = [
  { id: 1, title: 'Laptop Sale',           amount: '$800',  parties: 'Alicia Bowen · Joshua White' },
  { id: 2, title: 'Web Development',       amount: '$1 500', parties: 'Kevin Singh · Emma Carter'   },
  { id: 3, title: 'Car Purchase',          amount: '$12 000',parties: 'Victoria Shaw · Brian Walsh' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-[#00222f] to-[#041420] text-white">
      {/* ---------- HERO ---------- */}
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <img
            src={Logo}
            alt="Dealcross logo illustration"
            className="mx-auto h-60 w-60 object-contain md:order-2"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Secure
              <br />
              Transactions <span className="text-primary-400">with<br className="sm:hidden" /> Escrow</span>
            </h1>

            <p className="max-w-md text-lg font-light text-white/80">
              Trust, protect and save time with&nbsp;Dealcross escrow services.
            </p>

            <button
              onClick={() => navigate('/start-deal')}
              className="rounded-md bg-primary-500 px-8 py-3 text-sm font-semibold text-white shadow-md
                         transition hover:bg-primary-600"
            >
              Start a deal
            </button>
          </motion.div>
        </div>
      </div>

      {/* ---------- 3‑UP FEATURES ---------- */}
      <div className="bg-surface-dark/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-12 sm:grid-cols-3 sm:gap-8">
          {features.map(({ icon, title, text }) => (
            <div
              key={title}
              className="rounded-lg bg-surface px-6 py-8 text-center shadow-lg shadow-black/10"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/20">
                {icon}
              </div>
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="whitespace-pre-line text-sm text-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- DEALS IN PROGRESS ---------- */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Deals in Progress</h2>
          <button
            className="text-sm text-primary-400 hover:text-primary-300"
            onClick={() => navigate('/deal-tracker')}
          >
            View all →
          </button>
        </header>

        <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
          {dealsInProgress.map(({ id, title, amount, parties }) => (
            <div
              key={id}
              className="rounded-lg bg-surface px-5 py-4 shadow-lg shadow-black/10"
            >
              <p className="font-medium">{title}</p>
              <p className="text-sm text-foreground/60">{parties}</p>
              <p className="mt-2 font-semibold">{amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- CTA STRIP ---------- */}
      <div className="bg-surface-dark/90 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-semibold">
            Buy and Sell Company Shares
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/80">
            Trade company shares securely and efficiently.
          </p>
          <button
            onClick={() => navigate('/share-trading')}
            className="rounded-md bg-primary-500 px-8 py-3 font-semibold shadow-md
                       transition hover:bg-primary-600"
          >
            Start trading
          </button>
        </div>
      </div>
    </section>
  );
      }
