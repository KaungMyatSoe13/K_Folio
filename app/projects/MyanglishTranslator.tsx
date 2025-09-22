import React from "react";
import Image from "next/image";
import { vt323 } from "../fonts/fonts";

export default function MyanglishTranslator() {
  return (
    <div className={`${vt323.className} space-y-8`}>
      {/* Custom Header for Myanglish Translator */}
      <div className="bg-gradient-to-r from-orange-900 to-red-900 p-6 rounded-lg border border-orange-400">
        <h1 className="text-4xl text-orange-400 mb-2">Myanglish Translator</h1>
        <p className="text-gray-300">
          Myanmar-English Real-time Translation Tool
        </p>
      </div>

      {/* Custom layout for Myanglish Translator */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              Myanglish Translator is an AI-powered translation application that
              provides seamless Myanmar-English bidirectional translation.
              Features include voice recognition, text-to-speech, and cultural
              context understanding.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm">
                Python
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                TensorFlow
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                NLP
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                Flask
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-orange-400 mb-2">
                🗣️ Voice Translation
              </h3>
              <p className="text-gray-300 text-sm">
                Real-time speech recognition and translation
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-orange-400 mb-2">
                📝 Text Translation
              </h3>
              <p className="text-gray-300 text-sm">
                Accurate bidirectional text translation
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-orange-400 mb-2">
                🔊 Text-to-Speech
              </h3>
              <p className="text-gray-300 text-sm">
                Natural voice synthesis in both languages
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-orange-400 mb-2">🧠 Context Aware</h3>
              <p className="text-gray-300 text-sm">
                Cultural and contextual translation accuracy
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">
              Technical Implementation
            </h2>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                • Custom trained neural network model for Myanmar language
                processing
              </p>
              <p>
                • Integration with Google Speech-to-Text and Text-to-Speech APIs
              </p>
              <p>• RESTful API architecture with Flask backend</p>
              <p>• React Native mobile app with offline capabilities</p>
              <p>• Custom tokenization for Myanmar script handling</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Project Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy Rate:</span>
                <span className="text-orange-400">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Languages:</span>
                <span className="text-orange-400">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Daily Users:</span>
                <span className="text-orange-400">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Translations/Day:</span>
                <span className="text-orange-400">2000+</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-orange-400 hover:underline">
                Live Demo →
              </a>
              <a href="#" className="block text-orange-400 hover:underline">
                GitHub →
              </a>
              <a href="#" className="block text-orange-400 hover:underline">
                API Documentation →
              </a>
              <a href="#" className="block text-orange-400 hover:underline">
                Research Paper →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Application Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Translation Interface"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">
              Translation Interface
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Voice Recognition"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">
              Voice Recognition
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Settings Panel"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">Settings Panel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
