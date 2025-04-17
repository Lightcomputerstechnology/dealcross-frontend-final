// src/components/ui/card.jsx
export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border p-4 shadow-sm ${className || ""}`}>
      {children}
    </div>
  );
}
