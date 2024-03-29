import React from "react";

const Chip = ({color, name}) => {
  return (
    <div className={`p-1 border border-[${color}] bg-[#5781ce] text-sm text-white rounded-lg min-w-16 text-center`}>
      {name}
    </div>
  );
};

export default Chip;
