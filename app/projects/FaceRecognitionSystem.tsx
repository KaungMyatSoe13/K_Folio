import React from "react";
import Image from "next/image";
import { vt323 } from "../fonts/fonts";

export default function FaceRecognitionSystem() {
  return (
    <div className={`${vt323.className} space-y-8`}>
      {/* Custom Header for Face Recognition System */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6 rounded-lg border border-indigo-400">
        <h1 className="text-4xl text-indigo-400 mb-2">
          Face Recognition System
        </h1>
        <p className="text-gray-300">
          AI-Powered Identity Verification & Security
        </p>
      </div>

      {/* Custom layout for Face Recognition System */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              Advanced face recognition system utilizing deep learning
              algorithms for real-time identity verification. Features include
              anti-spoofing detection, multi-face tracking, and secure biometric
              authentication with 99.7% accuracy.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">
                OpenCV
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                TensorFlow
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Python
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                CUDA
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-indigo-400 mb-2">
                👤 Face Detection
              </h3>
              <p className="text-gray-300 text-sm">
                Real-time multi-face detection and tracking
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-indigo-400 mb-2">
                🔐 Authentication
              </h3>
              <p className="text-gray-300 text-sm">
                Secure biometric identity verification
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-indigo-400 mb-2">🛡️ Anti-Spoofing</h3>
              <p className="text-gray-300 text-sm">
                Advanced protection against fake faces
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-indigo-400 mb-2">📊 Analytics</h3>
              <p className="text-gray-300 text-sm">
                Detailed recognition reports and insights
              </p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">System Architecture</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="text-lg text-indigo-400 mb-2">
                  Detection Pipeline
                </h3>
                <p className="text-gray-300 text-sm">
                  MTCNN → Face Alignment → Feature Extraction → Recognition
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-lg text-purple-400 mb-2">
                  Neural Networks
                </h3>
                <p className="text-gray-300 text-sm">
                  FaceNet embeddings with custom trained CNN for high accuracy
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-lg text-blue-400 mb-2">Security Layer</h3>
                <p className="text-gray-300 text-sm">
                  Liveness detection with depth analysis and texture mapping
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Performance Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy:</span>
                <span className="text-indigo-400">99.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Speed:</span>
                <span className="text-indigo-400">30 FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Detection Time:</span>
                <span className="text-indigo-400"> 50ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Database Size:</span>
                <span className="text-indigo-400">10K+ faces</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Use Cases</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>• Access Control Systems</div>
              <div>• Attendance Tracking</div>
              <div>• Security Surveillance</div>
              <div>• Mobile Authentication</div>
              <div>• Event Management</div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-indigo-400 hover:underline">
                Live Demo →
              </a>
              <a href="#" className="block text-indigo-400 hover:underline">
                GitHub Repository →
              </a>
              <a href="#" className="block text-indigo-400 hover:underline">
                Technical Paper →
              </a>
              <a href="#" className="block text-indigo-400 hover:underline">
                API Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">System Demonstration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg text-indigo-400">Real-time Detection</h3>
            <Image
              src="/test.png"
              alt="Face Detection Demo"
              width={400}
              height={250}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs">
              Multi-face detection with bounding boxes and confidence scores
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-indigo-400">Recognition Interface</h3>
            <Image
              src="/test.png"
              alt="Recognition Interface"
              width={400}
              height={250}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs">
              Identity verification with match confidence and user details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
