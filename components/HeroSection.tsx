"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image src="/headshot.jpg" alt="" width={300} height={300}></Image>
          <div>
            <h1>Hi, I'm Liam!</h1>
            <p>
              {" "}
              I'm a Software Engineer currently based in Gainesville, FL. I love
              to make robust software solutions that are reliable and highly
              available!
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
      </div>
    </section>
  );
};

export default HeroSection;
