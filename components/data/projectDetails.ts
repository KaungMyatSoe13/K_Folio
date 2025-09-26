export interface Project {
  name: string;
  platform: string;
  tech: string;
  description: string;
  shortDescription: string;
  details: {
    features: string[];
    challenges: string[];
    highlights: string[];
  };
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  year: string;
  status: "completed" | "in-progress" | "maintenance";
  images?: string[];
  video?: string[];
}

export const projects: Record<string, Project> = {
  peakfit: {
    name: "PeakFit",
    platform: "Mobile & Web",
    tech: "React Native/TypeScript/Firebase",
    description:
      "A comprehensive cross-platform fitness application designed to help users achieve their fitness goals through personalized workout plans, real-time progress tracking, and engaging fitness challenges.",
    shortDescription:
      "Cross-platform fitness app with workout plans, real-time tracking, and fitness challenges. Includes admin dashboard for managing users, workouts, and content.",
    details: {
      features: [
        "Personalized workout plans based on user goals and fitness level",
        "Real-time workout tracking with timer and rep counter",
        "Social fitness challenges and leaderboards",
        "Progress analytics with charts and statistics",
        "Admin dashboard for content management",
        "Push notifications for workout reminders",
        "Offline workout capability",
        "Integration with wearable devices",
      ],
      challenges: [
        "Implementing real-time synchronization across platforms",
        "Optimizing video streaming for workout demonstrations",
        "Creating responsive design for various screen sizes",
        "Managing complex state for workout sessions",
      ],
      highlights: [
        "Cross-platform compatibility (iOS, Android, Web)",
        "Real-time data synchronization",
        "Scalable architecture supporting thousands of users",
        "Intuitive admin panel for content creators",
      ],
    },
    links: {
      website: "https://peakfitt.wixstudio.com/webpage",
      github: "https://github.com/username/peakfit",
    },
    technologies: {
      frontend: ["React Native", "TypeScript", "React", "Tailwind CSS"],
      backend: ["Firebase Functions", "Node.js", "Express"],
      database: ["Firebase Firestore", "Firebase Storage"],
    },
    year: "2024",
    status: "completed",
    images: ["/PeakFit/PeakFitAdmin.png"],
    video: ["/PeakFit/PeakFitApp.mp4", "/PeakFit/PeakFItWeb.mp4"],
  },
};

export { projects as projectDetails };
