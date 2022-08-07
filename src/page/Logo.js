// import Atropos library
import Atropos from "atropos/react";

import "./logo.css";

// Initialize
export const Logo = () => {
  return (
    <Atropos
      className="atropos"
      activeOffset={50}
      alwaysActive={ true }
      shadowScale={1.05}
      stretchX={50}
      rotate
      rotateTouch
      rotateXMax={15}
      rotateYMax={15}
      shadow
      rootChildren
      scaleChildren
      rotateChildren
    >
      <img
        src={require("../image/logo.jpg")}
        alt="logo"
        data-atropos-offset="5"
      />
    </Atropos>
  );
};
