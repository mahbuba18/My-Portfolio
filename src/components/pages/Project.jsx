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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
];

const Project = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section className="py-16 px-4 bg-base-200 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
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
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button size="sm" variant="secondary" asChild>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoGithub className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link
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
              <CardTitle className="">
                {project.title}
                
              </CardTitle>
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
