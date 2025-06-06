// File: src/components/MetricsCard.jsx

const MetricsCard = ({ type, value, timestamp }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow text-center animate-fade-in">
      <p className="text-sm text-gray-400">{type.toUpperCase()}</p>
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
      <p className="text-xs text-gray-500">{new Date(timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default MetricsCard;