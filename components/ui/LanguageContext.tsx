"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations object
const translations = {
  en: {
    // Menu items
    "menu.about": "About",
    "menu.about.design": "Who?",
    "menu.projects": "Projects",
    "menu.projects.design": "Crafts",
    "menu.beyondtech": "BeyondTech",
    "menu.beyondtech.design": "Beyond\nTech!",

    // Navbar
    "nav.language.title": "Change to Japanese & English languages",
    "nav.resume": "Resume",
    "nav.close": "Close",
    "nav.project.tabs": "Project Tabs",
    "nav.more.tabs": "more project tabs",
    "nav.close.tab": "Close",

    // About me
    "about.aboutme.header": "AboutMe",
    "about.aboutme.content1": `Hey, I'm <span class='name-hover' data-image='profile' style='color:#3B82F6; font-weight:600; cursor:pointer;'>Kaung Myat Soe</span> 👋 You can call me <span style='color:#3B82F6; font-weight:600;'>K</span>, since it is hard to pronounce. Currently based in Bangkok, Thailand, but originally from Myanmar. I'm a developer who enjoys blending creativity, problem-solving, and tech into projects that make life easier (and more fun).`,
    "about.aboutme.content2":
      "I studied <span style='color:#3B82F6; font-weight:600;'>Computer Science (Big Data)</span> at <span class='school-hover' data-school='uow' style='color:#16A34A; font-weight:600; cursor:pointer;'>University of Wollongong, Australia</span>, and also hold a <span style='color:#3B82F6; font-weight:600;'>Diploma in IT</span> from <span class='school-hover' data-school='Sim' style='color:#F97316; font-weight:600; cursor:pointer;'>SIM, Singapore</span>. Along the way, I've built full-stack apps with React/Next.js, explored AI with deep learning, and worked on projects like a fitness app, e-commerce platform, face recognition system, and even a Japanese vocabulary trainer.",

    "about.aboutme.content3": `Beyond coding, I'm curious, always learning, and love experimenting with new ideas—whether it's AI simulations, language learning, or just building cool stuff.`,

    // Timeline
    "about.timeline.header": "Timeline",

    // Tech
    "about.tech.header": "TechStacks",

    // Contact
    "about.contact.header": "Let's Connect",
    "about.contact.content":
      "I'   d love to hear from you! Reach out through any of these platforms.",

    // Projects
    "projects.header": "Selected Projects",
    "projects.description": "Description",
    "projects.platform": "Platform",
    "projects.role": "Role",
    "projects.technologies": "Technologies",
    "projects.website": "Website",
    "projects.year": "Year",
    "projects.frontend": "Frontend",
    "projects.backend": "Backend",
    "projects.database": "Database",

    // Peakfit
    "projects.peakfit.description":
      "Cross-platform fitness app with workout plans, real-time tracking, and fitness challenges. Includes admin dashboard for managing users, workouts, and content.",
    "projects.shopshop.description":
      "Full-stack e-commerce platform with COD checkout, user/admin dashboards, integrated JWT + Google OAuth authentication, and Cloudinary for image management.",
    "projects.myanglishtranslator.description":
      "Web app for Burmese ↔ Romanized Burmese translation with live preview, designed to help users seamlessly convert between Myanmar script and romanized text.",
    "projects.emoface.description":
      "AI-powered facial emotion recognition platform that analyzes facial expressions and predicts emotions using deep learning models with real-time processing capabilities.",
    "projects.kotobalab.description":
      "Japanese Vocabulary Quiz app with audio pronunciation, Excel upload support, and multiple practice modes for self-learners.",

    // Beyond Tech
    "beyond.header": "Beyond Code",
    "beyond.description":
      "Life is more than just grammar and algorithms. Here are the things I value beyond tech.",

    "beyond.music": "Music",
    "beyond.music_description": "Music I vibe to",

    "beyond.travel": "Travel",
    "beyond.travel_description": "Places I have explored",

    "beyond.share": "Let's share our taste",
  },
  ja: {
    // Menu items
    "menu.about": "私について",
    "menu.about.design": "誰？",
    "menu.projects": "プロジェクト",
    "menu.projects.design": "作品",
    "menu.beyondtech": "技術以外",
    "menu.beyondtech.design": "技術\n以外！",

    // Navbar
    "nav.language.title": "日本語と英語に切り替え",
    "nav.resume": "履歴書",
    "nav.close": "閉じる",
    "nav.project.tabs": "プロジェクトタブ",
    "nav.more.tabs": "その他のプロジェクトタブ",
    "nav.close.tab": "閉じる",

    // About me
    "about.aboutme.header": "私について",
    "about.aboutme.content1": `こんにちは、Kaung Myat Soe（コウン・ミャット・ソー）です👋 「K」と呼んでください。少し発音が難しいので。現在はタイのバンコクに住んでいますが、出身はミャンマーです。創造力・問題解決力・技術を組み合わせて、生活をより便利で楽しくするプロジェクトを作ることが好きな開発者です。`,

    "about.aboutme.content2": `オーストラリアのウーロンゴン大学でコンピュータサイエンス（ビッグデータ専攻）を学び、シンガポール経営学院（SIM）でITのディプロマも取得しました。これまでにReact/Next.jsを使ったフルスタックアプリの開発、ディープラーニングによるAIの研究、フィットネスアプリ、Eコマースプラットフォーム、顔認識システム、日本語単語トレーナーなどのプロジェクトに取り組んできました。`,

    "about.aboutme.content3": `コーディング以外でも、常に好奇心旺盛で新しいことを学ぶのが好きです。AIシミュレーション、語学学習、面白いアイデアのプロトタイプ作りなど、新しい挑戦を楽しんでいます。`,

    // Timeline
    "about.timeline.header": "タイムライン",

    // Tech
    "about.tech.header": "使用技術",

    // Contact
    "about.contact.header": "繋がりましょう",
    "about.contact.content":
      "ぜひお気軽にご連絡ください！どのプラットフォームからでもお待ちしています。",

    // Projects

    "projects.header": "プロジェクト",
    "projects.description": "説明",
    "projects.platform": "プラットフォーム",
    "projects.role": "役割",
    "projects.technologies": "使用技術",
    "projects.website": "ウェブサイト",
    "projects.year": "年",
    "projects.frontend": "フロントエンド",
    "projects.backend": "バックエンド",
    "projects.database": "データベース",

    // Projects details
    "projects.peakfit.description":
      "ワークアウトプラン、リアルタイムトラッキング、フィットネスチャレンジを備えたクロスプラットフォームのフィットネスアプリ。ユーザー、ワークアウト、コンテンツを管理する管理ダッシュボードも含まれます。",
    "projects.shopshop.description":
      "COD決済、ユーザー／管理者ダッシュボード、JWT＋Google OAuth認証、Cloudinaryによる画像管理を備えたフルスタックのeコマースプラットフォーム。",
    "projects.myanglishtranslator.description":
      "ビルマ語 ↔ ローマ字ビルマ語 の翻訳用ウェブアプリ。ライブプレビュー対応で、ユーザーがスムーズに文字を変換できるよう設計。",
    "projects.emoface.description":
      "AIを活用した顔の表情認識プラットフォーム。ディープラーニングモデルで表情を解析し、リアルタイムで感情を予測します。",
    "projects.kotobalab.description":
      "音声発音付きの日本語語彙クイズアプリ。Excelアップロード対応で、複数の練習モードを提供し、独学者が効率的に学習できます。",

    // Beyond Tech
    "beyond.header": "コードを超えて",
    "beyond.description":
      "人生は文法やアルゴリズムだけではありません。これは、私が技術以外で大切にしていることです。",

    "beyond.music": "音楽",
    "beyond.music_description": "私が共感する音楽",

    "beyond.travel": "旅行",
    "beyond.travel_description": "これまでに訪れた場所",

    "beyond.share": "センスを分かち合おう",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved === "en" || saved === "ja") {
      setLanguage(saved);
    }
  }, []);

  // Toggle between languages
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ja" : "en";
    setLanguage(newLang);
    localStorage.setItem("portfolio-language", newLang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
