import React, { useState } from "react";

function SwitchButtonProducts() {
  const [enabled, setEnabled] = useState(true);
  const enabledClass = " transform translate-x-5";

  return (
    <div className="flex h-10 items-center ">
      <div
        className="w-12 h-7 flex rounded-full p-1 cursor-pointer ml-10"
        // adding color when disabled
        onClick={() => {
          setEnabled(!enabled);
        }}
        onKeyDown="keyCode==39"
        role="switch"
        aria-checked="false"
        tabIndex="0"
        style={{
          backgroundColor: enabled ? "lightGrey" : "lightGreen",
        }}
      >
        <div
          className={`h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out${
            enabled ? null : enabledClass
          }`}
          style={{
            backgroundColor: "#fff",
          }}
        />
      </div>
    </div>
  );
}

export default SwitchButtonProducts;
