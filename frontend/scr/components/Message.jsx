export default function Message({ msg }) {
  return (
    <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-sm ${
          msg.sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-white shadow-md"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}