import React from "react";
import { useUser } from "../features/authenication/useUser";

function Header() {
  const { data } = useUser();
  
  return <div>Header</div>;
}

export default Header;
