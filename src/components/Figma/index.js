import React from "react";

export default function Figma({ children }) {
  return (
    <iframe
      className="embed"
      src={children.props.href}
      allowFullScreen
    ></iframe>
  );
}
