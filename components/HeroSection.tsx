"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:py-48">
        <div className="md:mt-2 md:w-4/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-36 md:text-8xl">
            Hey, I&apos;m Liam!
          </h1>
          <p className="mb-12 mt-4 text-lg md:text-2xl">
            {" "}
            I&apos;m a Software Engineer currently based in Gainesville, FL. I
            love to make robust software solutions that are highly available and
            fault tolerant!
          </p>
          <Link
            to="projects"
            className="rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="-mt-5 flex flex-row justify-center pb-40">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
