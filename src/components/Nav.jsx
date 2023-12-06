import { useState } from "react";
import Toggle from "./Toggle";
import Logo from "./logo.jsx";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav" data-toggle={toggle}>
      <div className="nav__container">
        <div className="logo">
          <Logo />
        </div>

        <Toggle {...{ toggle, setToggle }} />
      </div>
    </nav>
  );
};

export default Nav;
