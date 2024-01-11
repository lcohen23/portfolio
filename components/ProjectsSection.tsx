import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const projects = [
  {
    name: "Web Journal",
    description:
      "A personal blog style website for self-updates or progress updates.",
    image: "/webjournal.png",
    link: "https://github.com/acantril/learn-cantrill-io-labs/tree/master/aws-elastic-wordpress-evolution",
    skills: ["AWS", "MariaDB", "WordPress"],
    altText: "Thumbnail preview of Web Journal project",
  },
  {
    name: "Scale",
    description:
      "Scale is a fintech mobile app that aims to make budgeting and transaction categorization simplified.",
    image: "/scale.png",
    link: "https://youtu.be/qYvP80r_nCs",
    skills: [
      "TypeScript",
      "React Native",
      "Express",
      "SQLite",
      "Github Actions",
      "Jest",
      "RESTful API",
    ],
    altText: "Photo of Scale project logo",
  },
  {
    name: "ASL For VetMed",
    description:
      "A webapp intended to engage students in learning American Sign Language through video quizzes accompanied by progress tracking and social capabilities.",
    image: "/ASLforVetMed.png",
    skills: [
      "Azure",
      "JavaScript",
      "HTML",
      "SCSS",
      "React.js",
      "MongoDB",
      "Node.js",
      "Bootstrap",
      "CircleCI",
    ],
    altText: "Thumbnail preview of  ASL for VetMed home page",
  },
  {
    name: "Rocket Ranger",
    description:
      "A infinite-scroller space videogame built entirely with Processing.",
    link: "https://www.youtube.com/watch?v=k9NxbNHwWvg",
    image: "/RocketRanger.png",
    skills: ["Processing"],
    altText: "Photo of Rocket Ranger project main menu",
  },
  {
    name: "Joystick Simulator",
    description:
      "A Linux userspace device driver that enables the ability to control any software (games, simulators, etc.) that has joystick compatibility",
    image: "/joystick.png",
    skills: ["C", "Linux"],
    altText: "Screenshot of Joystick Simulator project",
  },
  {
    name: "Credential Maps",
    description:
      "An application to store and validate credentials using a binary search tree and splay tree. Simulates consecutive logins based on a dataset to compare efficiency of both data structures.",
    image: "/bst.png",
    link: "https://github.com/rrkrish561/credential-maps",
    skills: ["C++"],
    altText: "Photo of a Binary Search Tree",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold">
        Projects
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="group relative mt-8 md:w-1/2">
                    {project.link ? (
                      <Link href={project.link} target="_blank">
                        <div className="relative">
                          <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl shadow-xl transition duration-500 ease-in-out group-hover:opacity-70"
                          />
                          <BsArrowUpRightSquare
                            size={30}
                            className="absolute inset-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/50 text-white opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"
                          />
                        </div>
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.altText}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl"
                      />
                    )}
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <div className="flex flex-row flex-wrap justify-center md:justify-start">
                      {project.skills.map((skill) => (
                        <p
                          className="mr-3 mt-2 rounded bg-gray-200 px-4 py-2 font-semibold text-gray-500"
                          key={skill}
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
