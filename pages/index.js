import { Button, Tooltip, Typography } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import ProgressLine from "../components/progressLine";
import { FAMILIAR, TRIED } from "../resources/skills";
import { generalInfo, personalInfo } from "../resources/generalInfo";
import { PROJECTS } from "../resources/projects";
import ProjectCard from "../components/projectCard";

const index = () => {
  const [mount, setMount] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef(null);
  const fadeOut = "opacity-100";
  const fadeIn = "opacity-0 -translate-y-[30%] transition-all ease-in-out";

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <section className="">
        <div className="flex min-h-[35rem]">
          <div className="bg-[#f0e8e2] w-[42%]" />
          <div className="bg-white w-[58%]" />
          <div
            className={`${
              mount ? fadeOut : fadeIn
            } duration-500 flex absolute top-[20rem] left-1/2 -translate-y-[45%] -translate-x-1/2 min-w-[40rem] max-w-[40rem]`}
          >
            <div className="flex flex-col justify-end items-center bg-[#f4ece6] min-h-[10rem] text-center w-[40%] shadow-2xl">
              <img
                src="/profile.png"
                alt="profile"
                width={500}
                className="rounded-full w-[12rem] mx-6 my-6"
              />
              <Typography variant="h5" className="">
                {personalInfo.name}
              </Typography>
              <div className="w-[54px] h-[2px] bg-blue-gray-600 mt-5 rounded-lg" />
              <Typography variant="h6" className="my-5">
                {personalInfo.applyTo}
              </Typography>
              <ul className="bg-white w-full flex gap-6 justify-center py-3">
                <Tooltip content="깃허브" placement="bottom">
                  <a href="https://github.com/Timmer27" target="_blank">
                    <img src="/git.png" width={32} height={32} />
                  </a>
                </Tooltip>
                <Tooltip content="티스토리 블로그" placement="bottom">
                  <a href="https://timmer.tistory.com/" target="_blank">
                    <img src="/tstory.svg" width={32} height={32} />
                  </a>
                </Tooltip>
              </ul>
            </div>
            <div className="px-4 pb-3 bg-white w-[60%]">
              <Typography variant="h3" className="my-5">
                ABOUT
              </Typography>
              {/* <Typography variant="paragraph" className=""> */}
                <div className="text-sm mb-5" dangerouslySetInnerHTML={{ __html: personalInfo.about }} />
              {/* </Typography> */}
              <ui className="list-none">
                {generalInfo.map((val, idx) => {
                  return (
                    <li key={idx} className="flex gap-3 my-2">
                      <>{val.icon}</> {val.label}
                    </li>
                  );
                })}
              </ui>
            </div>
          </div>
        </div>
      </section>
      <section className="m-16" ref={myRef}>
        <Typography variant="h3" className="my-5 text-center">
          SKILLS
        </Typography>
        <Typography variant="lead" className="font-bold mb-4">
          FAMILIAR
        </Typography>
        <div className="grid grid-flow-row-dense grid-cols-2">
          {FAMILIAR.map((val, idx) => {
            const delay = `${(idx + 1) / 10}s`;
            return (
              <ProgressLine
                key={idx}
                label={val.label}
                backgroundColor={val.backgroundColor}
                visualParams={val.visualParams}
                transitionDelay={delay}
              />
            );
          })}
        </div>

        {/* <div className="w-[60px] h-[2px] bg-blue-gray-600 my-2 rounded-lg" /> */}

        <Typography variant="lead" className="font-bold mb-4">
          TRIED
        </Typography>

        <div className="grid grid-flow-row-dense grid-cols-2">
          {TRIED.map((val, idx) => {
            const delay = `${(idx + 1) / 10}s`;
            return (
              <ProgressLine
                key={idx}
                label={val.label}
                backgroundColor={val.backgroundColor}
                visualParams={val.visualParams}
                transitionDelay={delay}
              />
            );
          })}
        </div>
      </section>
      <section className="m-16">
        <Typography variant="h3" className="my-5 text-center">
          PROJECTS
        </Typography>
        {/* <div>
          <Button onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? "전체 닫기" : "전체 열기"}</Button>
        </div> */}
        {PROJECTS.map((val, idx) => {
          return (
            <ProjectCard
              key={idx}
              period={val.period}
              type={val.type}
              img={val.img}
              name={val.name}
              content={val.content}
              desc={val.desc}
              skills={val.skills}
              isOpen={isOpen}
            />
          );
        })}
      </section>
    </>
  );
};

export default index;
