"use client";
import asciiArt from "../../public/ascii.png";
import Image from "next/image";
import AsciiGridBackground from "../ui/AsciiGridBackground";
import { alansans } from "@/app/fonts/fonts";
import { playwrite } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  Code2,
  Briefcase,
} from "lucide-react";
import { i } from "framer-motion/client";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  type: string;
  age?: string;
}

interface TechCategory {
  category: string;
  techs: string[];
}

interface VisibilityState {
  [key: string]: boolean;
}

interface FloatingIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
  colorFrom: string;
  colorTo: string;
  glowColor: string;
  id: string; // Add this
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  href,
  icon: Icon,
  label,
  colorFrom,
  colorTo,
  glowColor,
  id,
}) => {
  // Different starting positions based on id
  const getInitialPosition = () => {
    switch (id) {
      case "email":
        return { x: 20, y: 30 };
      case "github":
        return { x: 70, y: 25 };
      case "linkedin":
        return { x: 50, y: 70 };
      default:
        return { x: 50, y: 50 };
    }
  };

  const [position, setPosition] = useState(getInitialPosition());
  const timeRef = useRef(Math.random() * 10); // Random start time

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      timeRef.current += 0.008;

      const newX =
        getInitialPosition().x +
        Math.sin(timeRef.current * 0.7) * 25 +
        Math.cos(timeRef.current * 0.3) * 10;
      const newY =
        getInitialPosition().y +
        Math.cos(timeRef.current * 0.5) * 25 +
        Math.sin(timeRef.current * 0.4) * 10;

      setPosition({
        x: Math.max(10, Math.min(80, newX)),
        y: Math.max(10, Math.min(80, newY)),
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <a
        href={href}
        target="_blank" // <-- add this
        className="absolute group pointer-events-auto cursor-pointer"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 rounded-full  opacity-40 group-hover:opacity-70 transition-opacity"></div>

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-gray-800 to-gray-400 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all duration-300">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white group-hover:rotate-12 transition-transform" />
          </div>
        </div>
        <p className="text-center text-xs sm:text-sm text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </p>
      </a>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const text1 = "Full Stack Developer";
  const text2 = "Web Developer";

  const container = {
    initial: {},
    hovered: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const letter = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  const letter2 = {
    initial: { y: "100%" },
    hovered: { y: 0 },
  };

  useEffect(() => {
    const observers: { [key: string]: IntersectionObserver } = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]!);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const timeline: TimelineItem[] = [
    {
      year: "2025",
      title: "Freelance",
      company: "Self-Employed",
      type: "work",
      age: "21",
    },
    {
      year: "2023",
      title: "Started Bachelor's in Big Data",
      company: "[University of Wollongong]",
      type: "Education",
      age: "19",
    },
    {
      year: "2022",
      title: "Started Diploma in Computer Science",
      company: "[Singapore Institute of Management]",
      type: "Education",
      age: "18",
    },
  ];

  const techStack: TechCategory[] = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
    },
    {
      category: "Animations",
      techs: ["GSAP", "Three.js", "WebGL", "Framer Motion"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Supabase", "Firebase", "REST APIs"],
    },
    {
      category: "Database",
      techs: ["SQL", "PostgreSQL", "MongoDB", "NoSQL", "Cloudinary"],
    },
    {
      category: "AI/ML",
      techs: ["TensorFlow", "PyTorch", "Pandas", "NumPy"],
    },
    {
      category: "DevOps",
      techs: ["Docker", "Git", "CI/CD", "Microsoft 365"],
    },
  ];

  return (
    <div
      className={`${alansans.className} w-full max-w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white`}
    >
      {/* Hero Section - Name and Photo */}
      <section className=" flex relative overflow-hidden items-center justify-center mx-auto py-5"></section>
      <div className="max-w-6xl w-full sm:pl-8 pl-5">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 bg-clip-text text-transparent"
          >
            Kaung Myat Soe @K
          </motion.h1>
        </div>

        <motion.p
          initial="initial"
          whileHover="hovered"
          animate="visible"
          variants={{
            ...container,
            initial: { y: "100%" },
            visible: { y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative block overflow-hidden whitespace-nowrap text-2xl md:text-3xl text-purple-300 font-light cursor-pointer"
        >
          <span className="flex">
            {text1.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          <span className="absolute inset-0 flex text-cyan-400">
            {text2.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter2}
                className="inline-block"
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.p>
      </div>
      <section
        className={`w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 `}
      >
        <div className="w-full max-w-4xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current["about"] = el;
            }}
          >
            {/* Title slides in from left */}
            <div className="overflow-hidden">
              <h2
                className={`border-b-2 border-purple-200 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 delay-100 ${
                  isVisible["about"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                AboutMe
              </h2>
            </div>

            {/* Content slides up from bottom */}
            <div className="backdrop-blur-lg p-6 sm:p-8 shadow-2xl transition-all duration-300 overflow-hidden">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible["about"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  Hey, I&apos;m{" "}
                  <span className="font-semibold text-blue-500 text-xl">
                    Kaung Myat Soe
                  </span>{" "}
                  👋 You can call me{" "}
                  <span className="font-semibold text-blue-500 text-xl">K</span>{" "}
                  , since it is hard to pronounce. Currently based in Bangkok,
                  Thailand, but originally from Myanmar. I&apos;m a developer
                  who enjoys blending creativity, problem-solving, and tech into
                  projects that make life easier (and more fun).
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  I studied Computer Science (Big Data) at the University of
                  Wollongong, Australia, and also hold a Diploma in IT from SIM,
                  Singapore. Along the way, I&apos;ve built full-stack apps with
                  React/Next.js, explored AI with deep learning, and worked on
                  projects like a fitness app, e-commerce platform, face
                  recognition system, and even a Japanese vocabulary trainer.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Beyond coding, I&apos;m curious, always learning, and love
                  experimenting with new ideas—whether it&apos;s AI simulations,
                  language learning, or just building cool stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Timeline */}
      <section className="w-full py-5 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="w-full max-w-4xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current["journey"] = el;
            }}
            className={`transition-all duration-1000 ${
              isVisible["journey"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="border-b-2 border-purple-200 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3">
              <span className=" ">MyTimeline</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 group hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform text-sm sm:text-base">
                      {item.age}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-gray-500 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6 sm:pb-8 min-w-0">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 sm:p-6  hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 shadow-xl">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 mb-1 break-words">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-purple-300 break-words">
                        {item.company}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="w-full max-w-4xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current["tech"] = el;
            }}
            className={`transition-all duration-1000 delay-300 ${
              isVisible["tech"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h1 className="border-b-2 border-purple-200 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              TechStacks
            </h1>

            <div className="">
              {techStack.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden text-gray-300 border-b border-white/10 cursor-pointer p-3 sm:p-4 md:p-6 flex items-center justify-between gap-2 sm:gap-3 md:gap-4 min-w-0"
                >
                  {/* Category name */}
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold relative z-10 transition-all duration-500 group-hover:text-black group-hover:translate-x-1 flex-shrink-0 whitespace-nowrap">
                    {item.category}
                  </span>

                  {/* Techs beside header */}
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 text-[10px] xs:text-xs sm:text-sm md:text-base relative z-10 transition-all duration-500 group-hover:text-black flex-1 min-w-0 justify-end flex-wrap">
                    {item.techs.map((tech, i) => (
                      <span key={i} className="whitespace-nowrap flex-shrink-0">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Background fill animation */}
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current["connect"] = el;
            }}
            className={`transition-all duration-1000 delay-400 ${
              isVisible["connect"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative min-h-[500px] sm:min-h-[600px] border-2 border-white/10 rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm">
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let&apos;s Connect
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md mx-auto px-4">
                  I&apos;d love to hear from you! Reach out through any of these
                  platforms.
                </p>
              </div>

              <FloatingIcon
                id="email"
                href={`mailto:kaungsoe132004@gmail.com`}
                icon={Mail}
                label="Email"
                colorFrom="cyan-500"
                colorTo="blue-500"
                glowColor="cyan-500"
              />

              <FloatingIcon
                id="github"
                href="https://github.com/KaungMyatSoe13"
                icon={Github}
                label="GitHub"
                colorFrom="purple-500"
                colorTo="pink-500"
                glowColor="purple-500"
              />

              <FloatingIcon
                id="linkedin"
                href="https://www.linkedin.com/in/kforsure/"
                icon={Linkedin}
                label="LinkedIn"
                colorFrom="blue-500"
                colorTo="cyan-500"
                glowColor="blue-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
