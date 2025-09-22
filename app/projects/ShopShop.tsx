// Example: components/Projects/ShopShop.tsx
import React from "react";
import Image from "next/image";
import { vt323 } from "../../app/fonts/fonts";

export default function ShopShop() {
  return (
    <div className={`${vt323.className} space-y-8`}>
      {/* Custom Header for ShopShop */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-6 rounded-lg border border-cyan-400">
        <h1 className="text-4xl text-cyan-400 mb-2">ShopShop</h1>
        <p className="text-gray-300">E-commerce Platform with Modern Design</p>
      </div>

      {/* Custom layout for ShopShop */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              ShopShop is a full-featured e-commerce platform built with modern
              web technologies. It features a sleek design, advanced search
              capabilities, and seamless checkout process.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                Node.js
              </span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                MongoDB
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-cyan-400 mb-2">🛒 Shopping Cart</h3>
              <p className="text-gray-300 text-sm">
                Advanced cart with real-time updates
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-cyan-400 mb-2">💳 Payment Gateway</h3>
              <p className="text-gray-300 text-sm">Secure payment processing</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-cyan-400 mb-2">📱 Responsive</h3>
              <p className="text-gray-300 text-sm">
                Mobile-first design approach
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-cyan-400 mb-2">🔍 Search</h3>
              <p className="text-gray-300 text-sm">AI-powered product search</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Project Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Lines of Code:</span>
                <span className="text-cyan-400">15,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Components:</span>
                <span className="text-cyan-400">50+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">API Endpoints:</span>
                <span className="text-cyan-400">25</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-cyan-400 hover:underline">
                Live Demo →
              </a>
              <a href="#" className="block text-cyan-400 hover:underline">
                GitHub →
              </a>
              <a href="#" className="block text-cyan-400 hover:underline">
                Case Study →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/test.png"
            alt="ShopShop Homepage"
            width={400}
            height={300}
            className="rounded-lg border border-gray-600"
          />
          <Image
            src="/test.png"
            alt="ShopShop Product Page"
            width={400}
            height={300}
            className="rounded-lg border border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
