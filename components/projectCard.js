import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Chip from "./chip";

const ProjectCard = ({ period, type, img, name, skills, content, desc, isOpen }) => {
  const fadeOut = "opacity-100";
  const fadeIn = "opacity-0 -translate-y-1/3 transition-all ease-in-out";
  const [isClicked, setIsClicked] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
    <div
      className={`${
        inView ? fadeOut : fadeIn
      } duration-500 my-3`}
    //   cursor-pointer 
    //   onClick={() => setIsClicked(!isClicked)}
    >
      <header className="flex shadow-lg rounded-lg p-5">
        <img src={img} alt="" className="w-[32rem] min-w-[32rem] h-96" />
        <div className="flex flex-col pl-6 w-full">
          <div className="flex justify-between">
            <div className="text-sm text-[#535353] flex gap-3 items-center">
              <div className="text-xs font-bold">{type}</div>
              <div className="">{period}</div>
            </div>
            {/* <div className="flex text-sm">
                  <span className="text-[10px]">더 알아보기</span>
                  <ArrowRightEndOnRectangleIcon width={20} />
                </div> */}
          </div>
          <Typography variant="h5">{name}</Typography>
          <div className="w-[60px] h-[2px] bg-blue-gray-600 my-2 rounded-lg" />
          <div className="flex gap-2">
            {skills.map((val) => {
              console.log("val.color", val.color);
              return <Chip name={val.name} color={val.color} />;
            })}
          </div>
          <article
            ref={ref}
            className={`${
              isClicked || isOpen ? "max-h-96" : "max-h-0 invisible"
            } transition-all duration-300 ease-in-out overflow-hidden mt-4`}
          >
            <div
              className="text-sm mb-5"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="w-full h-[0.5px] bg-[#c1c1c1] my-2 rounded-lg" />
            <ul className="list-[upper-roman]">
              {desc.map((val) => {
                return (
                  <li className="flex gap-3 leading-7 mb-2">
                    <div
                      className="min-w-[6rem] w-[6rem] font-bold"
                      dangerouslySetInnerHTML={{ __html: val.key }}
                    />
                    <div
                      className="text-sm flex items-center"
                      dangerouslySetInnerHTML={{ __html: val.value }}
                    />
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </header>
    </div>
  );
};

export default ProjectCard;
