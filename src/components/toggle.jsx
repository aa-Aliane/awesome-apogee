import { useState } from "react";

const toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ul class="nav__menu" data-toggle={toggle}>
        <li class="nav__menu__item">
          <a href="/">Home</a>
        </li>
        <li class="nav__menu__item">
          <a href="/about/">About</a>
        </li>
        <li class="nav__menu__item">
          <a href="/blog/">Blog</a>
        </li>
      </ul>
      <div
        class="toggle"
        data-toggle={toggle}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <span class="toggle__bar"></span>
        <span class="toggle__bar"></span>
        <span class="toggle__bar"></span>
      </div>
    </>
  );
};

export default toggle;
