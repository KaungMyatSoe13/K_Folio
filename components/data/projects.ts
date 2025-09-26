export interface Project {
  name: string;
  platform: string;
  tech: string;
}

export const projects: Project[] = [
  {
    name: "PeakFit",
    platform: "Mobile",
    tech: "React Native/TypeScript/Firebase",
  },
  {
    name: "ShopShop",
    platform: "Web App",
    tech: "MERN + Cloudinary",
  },
  {
    name: "Myanglish Translator",
    platform: "Web App",
    tech: "React + Tailwind CSS",
  },
  {
    name: "Face Recognition System",
    platform: "AI/ML",
    tech: "TensorFlow + PyTorch + VGG",
  },
];
