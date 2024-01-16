import React, { useContext, useEffect, useState } from "react";
import { refContext } from "../pages/_app";
import { useRouter } from "next/router";

const PageHeader = () => {
  const myContext = useContext(refContext);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (typeof window === "object") {
      setIsMobile(window.innerWidth);
    }
  }, []);

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

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
      <img
        src="/logo.png"
        alt="logo"
        width={160}
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      />
      {isMobile >= 700 ? (
        <nav className="">
          <ul className="flex gap-7">
            {navHeader.map((val, idx) => {
              return (
                <a href="#">
                  <li
                    onClick={() => {
                      if (val.label === "ACHIEVEMENT") {
                        alert("준비 중!");
                      } else {
                        const ref =
                          val.label === "ABOUT"
                            ? myContext.aboutRef
                            : val.label === "SKILLS"
                            ? myContext.skillRef
                            : myContext.projectRef;
                        executeScroll(ref);
                      }
                    }}
                  >
                    {val.label}
                  </li>
                </a>
              );
            })}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
};

export default PageHeader;
