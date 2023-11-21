"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="mb-12 mt-32 md:mt-80">
        <h1 className="text-center text-4xl font-bold">About Me</h1>
        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-5 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              A little about me!
            </h1>
            <p>
              {" "}
              My name is Liam Cohen, a software engineer raised in South Florida
              now based in Gainesville, Florida.{" "}
            </p>
            <br />
            <p>
              I am passionate about making thorough solutions that can bring
              value to consumers. I graduated from the University of Florida in
              2023 with a BS in Computer Science and a minor in Sociology, and
              am currently looking to make a name for myself in the professional
              world.
            </p>
            <br />
            <p>
              I always try to stay ahead of the curve and try new things. Some
              of my hobbies include volleyball, playing guitar, and seeing how
              fast I can beat minesweeper on hard difficulty!
            </p>
          </div>
          <div className="md:mt items-center pl-14 md:w-1/2">
            <Image
              className="rounded-full shadow-2xl"
              src="/headshot.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
