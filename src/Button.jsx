// Minimal Button component for GitBook UI testing

export default function Button({ label = "Click Me" }) {
  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        background: "#f7f7f7",
        border: "1px solid #ccc",
        cursor: "pointer",
        fontSize: "14px"
      }}
    >
      {label}
    </button>
  );
}
