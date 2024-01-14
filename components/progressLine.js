import React, { useEffect, useState } from "react";

// https://codesandbox.io/p/sandbox/react-animated-progress-bar-rh3rz?file=%2Fsrc%2FProgressLine.js%3A28%2C65
const ProgressLine = ({
  label,
  backgroundColor,
  visualParams = [{ pct: "0%", color: "black" }],
  transitionDelay = "0.1s"
}) => {
  const [width, setWidth] = useState(
    visualParams.map((val) => {
      return 0;
    })
  );

  useEffect((val) => {
    requestAnimationFrame(() => {
      setWidth(
        visualParams.map((val) => {
          return val.pct;
        })
      );
    });
  }, []);
  return (
    <div>
      <div className="text-[#555555]">{label}</div>
      <div
        className="flex h-6 my-5 mx-4 shadow-lg"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {visualParams.map((val, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: width[idx],
                backgroundColor: val.color,
                transition:
                  "width 1s ease-in-out, background-color 2s ease-in-out",
                transitionDelay: `${transitionDelay}`,
                textAlign: "center"
              }}
              className="transition-all w-full rounded-md text-white"
            >
              {val.pct}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressLine;
