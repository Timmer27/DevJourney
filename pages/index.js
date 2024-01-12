import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const index = () => {
  return (
    <>
      <section className="">
        <div className="flex min-h-[10rem]">
          <div className="bg-blue-gray-500 w-[40%]" />
          <div className="bg-blue-gray-100 w-[60%]" />
          <div className="fixed left-[50%] mt-4">
            <div>card</div>
            <div>
              <Typography variant="h2" className="">
                Material Tailwind
              </Typography>
              <Typography variant="h5" className="">
                Material Tailwind
              </Typography>
              <p>
                desc
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>skills = graph and strength, knowledgeable</section>
      <section>project with chips on top. card format</section>
    </>
  );
};

export default index;
