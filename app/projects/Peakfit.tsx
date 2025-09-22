import React from "react";
import Image from "next/image";
import { vt323 } from "../fonts/fonts";

export default function Peakfit() {
  return (
    <div className={`${vt323.className} space-y-8`}>
      {/* Custom Header for PeakFit */}
      <div className="bg-gradient-to-r from-green-900 to-teal-900 p-6 rounded-lg border border-green-400">
        <h1 className="text-4xl text-green-400 mb-2">PeakFit</h1>
        <p className="text-gray-300">Fitness Tracking & Workout Planning App</p>
      </div>

      {/* Custom layout for PeakFit */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              PeakFit is a comprehensive fitness tracking application that helps
              users monitor their workouts, track progress, and achieve their
              fitness goals. Built with modern mobile-first design principles.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                React Native
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Firebase
              </span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                JavaScript
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-green-400 mb-2">
                💪 Workout Tracking
              </h3>
              <p className="text-gray-300 text-sm">
                Log exercises, sets, reps, and weights
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-green-400 mb-2">
                📊 Progress Analytics
              </h3>
              <p className="text-gray-300 text-sm">
                Visual progress charts and insights
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-green-400 mb-2">
                🏃 Activity Monitoring
              </h3>
              <p className="text-gray-300 text-sm">
                Track cardio, steps, and calories
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-green-400 mb-2">🎯 Goal Setting</h3>
              <p className="text-gray-300 text-sm">
                Set and achieve fitness milestones
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">App Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Screens:</span>
                <span className="text-green-400">20+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Components:</span>
                <span className="text-green-400">35+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Features:</span>
                <span className="text-green-400">12</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-green-400 hover:underline">
                App Store →
              </a>
              <a href="#" className="block text-green-400 hover:underline">
                Play Store →
              </a>
              <a href="#" className="block text-green-400 hover:underline">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">App Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/test.png"
            alt="PeakFit Dashboard"
            width={400}
            height={300}
            className="rounded-lg border border-gray-600"
          />
          <Image
            src="/test.png"
            alt="PeakFit Workout Tracker"
            width={400}
            height={300}
            className="rounded-lg border border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
