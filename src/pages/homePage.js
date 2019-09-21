import React from "react";
import { NavLink } from "react-router-dom";
export default function homePage() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
}
