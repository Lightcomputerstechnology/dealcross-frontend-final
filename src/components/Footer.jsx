// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface px-6 py-8 text-center text-sm text-foreground/60">
      © {new Date().getFullYear()} Dealcross. All rights reserved.
    </footer>
  );
}
