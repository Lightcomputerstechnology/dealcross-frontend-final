// src/components/ui/card.jsx
export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border p-4 shadow-sm ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-2 ${className || ""}`}>
      {children}
    </div>
  );
}
