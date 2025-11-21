// Minimal Card component for GitBook UI testing

export default function Card({ title = "Card Title", description = "Card body text." }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "320px",
        background: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <h3 style={{ margin: "0 0 8px", fontSize: "16px" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>{description}</p>
    </div>
  );
}
