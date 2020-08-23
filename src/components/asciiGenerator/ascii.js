import React, { useEffect, useState } from "react";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

figlet.parseFont("Standard", standard);

function Ascii() {
  const [txt, setTxt] = useState("Hello World!!");
  const [ascii, setAscii] = useState("");
  useEffect(() => {
    figlet.text(
      txt,
      {
        standard,
        horizontalLayout: "full",
        verticalLayout: "full",
        width: 15,
        whitespaceBreak: true,
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        setAscii(data);
      }
    );
  }, [txt]);
  return (
    <div>
      <input onChange={(e) => setTxt(e.target.value)} type="text" value={txt} />
      <div>
        <pre>{ascii}</pre>
      </div>
    </div>
  );
}

export default Ascii;
