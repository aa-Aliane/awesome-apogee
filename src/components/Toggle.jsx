import { useState } from "react";

const Toggle = ({ toggle, setToggle }) => {
  return (
    <>
      <ul className="nav__menu" data-toggle={toggle}>
        <li className="nav__menu__item">
          <a onClick={() => setToggle(false)} href="/">
            Home
          </a>
        </li>
        <li className="nav__menu__item">
          <a onClick={() => setToggle(false)} href="/about/">
            About
          </a>
        </li>
        <li className="nav__menu__item">
          <a onClick={() => setToggle(false)} href="/blog/">
            Blog
          </a>
        </li>
      </ul>
      <div
        className="toggle"
        data-toggle={toggle}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
      </div>
    </>
  );
};

export default Toggle;
