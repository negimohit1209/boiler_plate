import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

export default function homePage() {
  return (
    <div>
      <Button>
        <NavLink to="/register">Register</NavLink>
      </Button>
    </div>
  );
}
