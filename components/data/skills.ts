export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    category: "Development & Frameworks",
    items: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases & Cloud",
    items: ["Firebase", "MongoDB", "PostgreSQL", "Cloudinary", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "VGG (Transfer Learning)",
      "DistilBERT",
      "Computer Vision",
      "Deep Learning",
      "NLP",
    ],
  },
];
