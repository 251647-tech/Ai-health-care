import { useState } from "react";
import Message from "./Message";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages([...messages, userMsg]);
    setLoading(true);

    const res = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: input }),
    });

    const data = await res.json();

    const botMsg = { text: data.result, sender: "bot" };

    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
        {loading && <p>Typing...</p>}
      </div>

      <div className="flex mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your symptoms..."
          className="flex-1 p-3 rounded-xl border"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 bg-blue-600 text-white rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}