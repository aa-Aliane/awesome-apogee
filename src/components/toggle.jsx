import { useState } from "react";

const toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      class="toggle"
      data-toggle={toggle}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      <span class="toggle__bar"></span>
      <span class="toggle__bar"></span>
      <span class="toggle__bar"></span>
    </div>
  );
};

export default toggle;
