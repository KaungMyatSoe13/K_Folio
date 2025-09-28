import MyanglishTranslator from "@/app/projects/MyanglishTranslator";

export interface Project {
  name: string;
  platform: string;
  tech: string;
  role: string;
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
    role: "Adminstration Dashboard + App Development",
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
      website: "https://shop-shop-pied.vercel.app/",
    },
    technologies: {
      frontend: ["React Native", "TypeScript", "React"],
      backend: ["Firebase Functions", "Node.js"],
      database: ["Firebase Firestore", "Firebase Storage"],
    },
    year: "2024",
    status: "completed",
    images: ["/PeakFit/PeakFitAdmin.png"],
    video: ["/PeakFit/PeakFitApp.mp4", "/PeakFit/PeakFItWeb.mp4"],
  },

  shopshop: {
    name: "ShopShop",
    platform: "Web Application",
    tech: "MERN Stack/Cloudinary/JWT",
    description:
      "A comprehensive full-stack e-commerce platform built with the MERN stack, featuring secure authentication, payment processing, and cloud-based image management. Designed to provide a seamless shopping experience for customers while offering powerful administrative tools for business owners.",
    shortDescription:
      "Full-stack e-commerce platform with COD checkout, user/admin dashboards, integrated JWT + Google OAuth authentication, and Cloudinary for image management.",
    role: "Full-Stack Development",
    details: {
      features: [
        "Complete e-commerce functionality with product catalog",
        "Cash on Delivery (COD) checkout system",
        "Dual authentication system (JWT + Google OAuth)",
        "Comprehensive user dashboard for order management",
        "Admin dashboard for product and order management",
        "Cloudinary integration for optimized image storage",
        "Responsive design for all devices",
        "Real-time order status updates",
        "Advanced search and filtering capabilities",
        "Shopping cart with persistent storage",
      ],
      challenges: [
        "Implementing secure dual authentication systems",
        "Managing complex state for shopping cart and orders",
        "Optimizing image loading and storage with Cloudinary",
        "Creating responsive admin interfaces",
        "Handling COD payment flow and order management",
      ],
      highlights: [
        "Full MERN stack implementation",
        "Secure JWT and OAuth integration",
        "Cloud-optimized image management",
        "Scalable e-commerce architecture",
        "Professional admin dashboard",
      ],
    },
    links: {
      website: "https://shop-shop-pied.vercel.app/", // Update with actual URL
    },
    technologies: {
      frontend: ["React", "JavaScript"],
      backend: ["Node.js"],
      database: ["MongoDB", "Cloudinary"],
    },
    year: "2025",
    status: "completed",
    images: [
      "/ShopShop/SignInUp.png",
      "/ShopShop/Home.png",
      "/ShopShop/Product.png",
      "/ShopShop/Cart.png",
      "/ShopShop/Profile.png",
      "/ShopShop/AdminHome.png",
      "/ShopShop/AdminTrackOrders.png",
      "/ShopShop/AdminAddProduct.png",
      "/ShopShop/TrackProduct.png",
    ],
    video: ["/ShopShop/Demo.mp4"],
  },

  myanglishtranslator: {
    name: "Myanglish Translator",
    platform: "Web Application",
    tech: "React/Tailwind CSS",
    description:
      "A specialized web application that bridges the gap between Burmese script and romanized Burmese text. This translator provides seamless bidirectional conversion with real-time preview, making it easier for Myanmar language learners, researchers, and diaspora communities to work with both writing systems. The application features an intuitive interface with live translation preview and supports comprehensive character mapping.",
    shortDescription:
      "Web app for Burmese ↔ Romanized Burmese translation with live preview, designed to help users seamlessly convert between Myanmar script and romanized text.",
    role: "Frontend Development",
    details: {
      features: [
        "Bidirectional translation (Burmese ↔ Romanized Burmese)",
        "Real-time live preview as you type",
        "Clean and intuitive user interface",
        "Comprehensive character mapping system",
        "Responsive design for all devices",
        "Copy-to-clipboard functionality",
        "Clear text buttons for quick reset",
        "Support for complex Burmese unicode characters",
        "Instant translation without page refresh",
        "Educational tool for language learners",
      ],
      challenges: [
        "Implementing accurate Burmese unicode character mapping",
        "Creating real-time bidirectional translation logic",
        "Handling complex Burmese script combinations",
        "Ensuring proper character encoding and display",
        "Optimizing performance for real-time translation",
      ],
      highlights: [
        "Real-time bidirectional translation",
        "Comprehensive Burmese character support",
        "Clean, user-friendly interface",
        "Educational language learning tool",
        "Instant live preview functionality",
      ],
    },
    links: {
      demo: "https://myanglish-translator-peach.vercel.app/", // Update with actual URL
    },
    technologies: {
      frontend: ["React", "Tailwind CSS", "JavaScript"],
      backend: [],
      database: [],
    },
    year: "2025",
    status: "completed",
    images: ["/MyanglishTranslator/Home.png"],
    video: ["/MyanglishTranslator/Demo.mp4"],
  },

  emoface: {
    name: "EmoFace",
    platform: "AI Web Application",
    tech: "Python/TensorFlow/OpenCV",
    description:
      "An advanced AI-powered platform that leverages deep learning models to analyze facial expressions and predict emotions from images. EmoFace utilizes computer vision and machine learning techniques to accurately detect and classify a wide range of human emotions including happiness, sadness, anger, surprise, fear, disgust, and neutral states. The platform offers real-time emotion analysis capabilities and provides valuable insights for applications in customer feedback analysis, mental health monitoring, user experience research, and entertainment industries.",
    shortDescription:
      "AI-powered facial emotion recognition platform that analyzes facial expressions and predicts emotions using deep learning models with real-time processing capabilities.",
    role: "AI/ML Development",
    details: {
      features: [
        "Multi-emotion recognition (happiness, sadness, anger, surprise, fear, disgust, neutral)",
        "Real-time emotion prediction from webcam feed",
        "Batch processing for uploaded image analysis",
        "Confidence scoring for emotion predictions",
        "Interactive web interface for easy usage",
        "RESTful API for integration with other applications",
        "Emotion analytics and reporting dashboard",
        "Support for multiple image formats (JPG, PNG, etc.)",
        "Lightweight and optimized for quick responses",
        "Customizable emotion detection thresholds",
      ],
      challenges: [
        "Training accurate deep learning models for emotion recognition",
        "Handling diverse facial expressions and lighting conditions",
        "Optimizing model performance for real-time processing",
        "Managing facial detection accuracy across different demographics",
        "Balancing model complexity with deployment efficiency",
      ],
      highlights: [
        "Advanced computer vision and deep learning implementation",
        "Real-time emotion analysis capabilities",
        "High accuracy emotion classification",
        "Scalable architecture for various applications",
        "Professional AI/ML solution with practical applications",
      ],
    },
    links: {
      demo: "https://github.com/APS4087/EMOFACE/tree/main?tab=readme-ov-file#emoface", // Update with actual URL
    },
    technologies: {
      frontend: ["React", "JavaScript", "HTML", "CSS"],
      backend: ["Python", "Flask", "TensorFlow", "Keras", "OpenCV"],
      database: [],
    },
    year: "2024",
    status: "completed",
    images: [
      "/EmoFace/testing.jpg",
      "/EmoFace/dataSelection.png",
      "/EmoFace/training.png",
      "/EmoFace/chart.png",
    ],
    video: [""],
  },
};

export { projects as projectDetails };
