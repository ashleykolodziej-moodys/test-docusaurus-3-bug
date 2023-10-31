import React from "react";

export default function Stackblitz({ children }) {
  return <iframe className="embed" src={children.props.href}></iframe>;
}
