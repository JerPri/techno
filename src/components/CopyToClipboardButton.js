import React, { useState } from "react";

export default function CopyToClipboardButton({ text }) {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`\`${text}\``).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <span
      style={{ position: "relative", cursor: "pointer" }}
      onClick={handleCopy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <code style={{ backgroundColor: "#f5f5f5", padding: "3px 6px", borderRadius: "4px" }}>
        {text}
      </code>

      {/* Tooltip au survol */}
      {hover && !copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#555",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            opacity: 0.9,
          }}
        >
          Cliquer pour copier
        </span>
      )}

      {/* Message après copie */}
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          Copié!
        </span>
      )}
    </span>
  );
}