import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700">
        AI Symptom Checker
      </h1>

      <p className="mt-3 text-gray-600">
        Check symptoms, get AI guidance instantly
      </p>

      <button
        onClick={() => nav("/chat")}
        className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-xl"
      >
        Start Chat
      </button>
    </div>
  );
}