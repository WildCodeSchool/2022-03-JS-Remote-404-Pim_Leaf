import React, { useState } from "react";

function SwitchButtonProducts({ disponibility }) {
  const [enabled] = useState(disponibility);
  const enabledClass = " transform translate-x-5";

  return (
    <div className="flex h-10 items-center ">
      <div
        className="w-12 h-7 flex rounded-full p-1 cursor-pointer ml-10"
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
