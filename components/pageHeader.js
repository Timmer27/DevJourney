import React from "react";

const PageHeader = () => {
  const navHeader = [
    {
      label: "ABOUT",
      link: "/about"
    },
    {
      label: "SKILLS",
      link: "/skills"
    },
    {
      label: "PROJECTS",
      link: "/about"
    },
    {
      label: "ACHIEVEMENT",
      link: "/about"
    }
  ];
  return (
    <header className="flex justify-around min-h-[5rem] items-center text-lg">
      <img src="/logo.png" alt="logo" width={160} />
      <nav className="">
        <ul className="flex gap-7">
          {navHeader.map((val, idx) => {
            return (
              <a href="#">
                <li>{val.label}</li>
              </a>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
