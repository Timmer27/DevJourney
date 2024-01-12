import React from "react";

const PageHeader = () => {
  return (
    <header className="flex justify-around">
      <div>logo</div>
      <nav>
        <ul className="flex">
          <li>me</li>
          <li>about</li>
          <li>tech</li>
          <li>project</li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
