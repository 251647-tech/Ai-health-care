export default function ResultCard({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-bold text-lg">Conditions</h2>

      {data.conditions.map((c, i) => (
        <p key={i}>{c.name} ({c.probability})</p>
      ))}

      <p className="mt-2">
        Urgency: <span className="text-red-500">{data.urgency}</span>
      </p>

      <h3 className="mt-2 font-semibold">Medicines</h3>
      {data.medicines.map((m, i) => (
        <p key={i}>{m.name} - {m.timing}</p>
      ))}

      <h3 className="mt-2 font-semibold">Diet</h3>
      <p>Eat: {data.diet.eat.join(", ")}</p>
      <p>Avoid: {data.diet.avoid.join(", ")}</p>
    </div>
  );
}