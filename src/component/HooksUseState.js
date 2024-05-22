import React, { useState } from "react";

function LuxuriousHooksUseState() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("white");

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headerStyle, backgroundColor: color }}>
        Count: {count} <br /> Color: {color}
      </h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "green", color: "white" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "red", color: "white" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: "20px",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  maxWidth: "600px",
  margin: "auto",
  textAlign: "center",
  backgroundColor: "#f7f7f7",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginTop: "50px"
};

const headerStyle = {
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  fontSize: "24px"
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap"
};

const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
  margin: "5px"
};

export default LuxuriousHooksUseState;
