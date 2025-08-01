import React from "react";
import { Link } from "react-router-dom";

import { IoLogoGithub } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projects = [
  {
    id: 1,
    title: "Job Portal Website",
    description:
      "A smart job portal connecting job seekers with tailored opportunities through skill-based matching.",
    image: "https://i.ibb.co/YVnQDwk/Screenshot-2025-08-01-224117.png",
    technologies: [
      "React",
      "tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/mahbuba18/job-portal-client",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Flower Shop ",
    description:
      "A responsive and elegant flower shop website built with HTML and CSS, showcasing fresh blooms with a modern design.",
    image: "https://i.ibb.co/q3k5pnx1/Screenshot-2025-07-31-203600.png",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/mahbuba18/my-flower-shop-repo",
    liveUrl: "https://mahbuba18.github.io/my-flower-shop-repo/",
    featured: true,
  },
];

const Project = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section
      id="projects"
      className="py-10 px-4 bg-base-300 md:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="flex items-center justify-center text-center lg:text-5xl text-3xl font-bold bg-gradient-to-r from-sky-500 to-green-400 text-transparent bg-clip-text mb-2 lg:gap-2 ">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in web development.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid bg-base-200  md:grid-cols-2 gap-8 mb-16 ">
        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative bg-base-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full p-2 h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button size="sm" variant="secondary" asChild>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center"
                  >
                    <IoLogoGithub className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link
                    className="flex justify-center"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiOutlineExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Projects Button */}
      {/* <div className="text-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/projects">
            View All Projects
            <HiOutlineExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div> */}
    </section>
  );
};

export default Project;
