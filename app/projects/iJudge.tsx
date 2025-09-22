import React from "react";
import Image from "next/image";
import { vt323 } from "../fonts/fonts";

export default function IJudge() {
  return (
    <div className={`${vt323.className} space-y-8`}>
      {/* Custom Header for iJudge */}
      <div className="bg-gradient-to-r from-red-900 to-pink-900 p-6 rounded-lg border border-red-400">
        <h1 className="text-4xl text-red-400 mb-2">iJudge</h1>
        <p className="text-gray-300">
          Online Programming Contest & Code Evaluation Platform
        </p>
      </div>

      {/* Custom layout for iJudge */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          {/* Hero Section */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-4">
              iJudge is a comprehensive online programming contest platform that
              enables automated code evaluation, contest management, and
              competitive programming. Features real-time judging, multiple
              language support, and advanced analytics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">
                Java
              </span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Spring Boot
              </span>
              <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                MySQL
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                Docker
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-red-400 mb-2">⚖️ Auto Judging</h3>
              <p className="text-gray-300 text-sm">
                Automated code compilation and execution
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-red-400 mb-2">
                🏆 Contest Management
              </h3>
              <p className="text-gray-300 text-sm">
                Complete contest lifecycle management
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-red-400 mb-2">
                📊 Real-time Leaderboard
              </h3>
              <p className="text-gray-300 text-sm">
                Live rankings and submission tracking
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <h3 className="text-lg text-red-400 mb-2">🔒 Secure Execution</h3>
              <p className="text-gray-300 text-sm">
                Sandboxed code execution environment
              </p>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">System Architecture</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <h3 className="text-lg text-red-400 mb-2">Judge Engine</h3>
                <p className="text-gray-300 text-sm">
                  Multi-threaded judging system with queue management and
                  resource isolation
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-lg text-blue-400 mb-2">Security Layer</h3>
                <p className="text-gray-300 text-sm">
                  Docker containers with memory and time limits for safe code
                  execution
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="text-lg text-green-400 mb-2">Database Design</h3>
                <p className="text-gray-300 text-sm">
                  Optimized schema for handling large-scale submissions and user
                  data
                </p>
              </div>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl text-white mb-4">Programming Languages</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                C++
              </div>
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                Java
              </div>
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                Python
              </div>
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                JavaScript
              </div>
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                C#
              </div>
              <div className="text-center p-2 bg-gray-700 rounded text-sm">
                Go
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Platform Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Users:</span>
                <span className="text-red-400">2,500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Problems:</span>
                <span className="text-red-400">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Contests Held:</span>
                <span className="text-red-400">150+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Submissions:</span>
                <span className="text-red-400">50K+</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Features</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>• Problem setter interface</div>
              <div>• Plagiarism detection</div>
              <div>• Team contests support</div>
              <div>• Editorial system</div>
              <div>• Discussion forums</div>
              <div>• Rating system</div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl text-white mb-4">Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-red-400 hover:underline">
                Live Platform →
              </a>
              <a href="#" className="block text-red-400 hover:underline">
                GitHub Repository →
              </a>
              <a href="#" className="block text-red-400 hover:underline">
                API Documentation →
              </a>
              <a href="#" className="block text-red-400 hover:underline">
                Admin Dashboard →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Platform Interface</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Problem List"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">
              Problem List Interface
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Code Editor"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">
              Integrated Code Editor
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/test.png"
              alt="Leaderboard"
              width={300}
              height={200}
              className="rounded-lg border border-gray-600 w-full"
            />
            <p className="text-gray-400 text-xs text-center">
              Contest Leaderboard
            </p>
          </div>
        </div>
      </div>

      {/* Contest Flow */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Contest Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-red-400 mb-1">1. Registration</div>
            <div className="text-xs text-gray-400">
              User registration & team formation
            </div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-3xl mb-2">⏰</div>
            <div className="text-red-400 mb-1">2. Contest Start</div>
            <div className="text-xs text-gray-400">
              Problems released & timer begins
            </div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-red-400 mb-1">3. Code & Submit</div>
            <div className="text-xs text-gray-400">
              Solve problems & submit solutions
            </div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-3xl mb-2">🏁</div>
            <div className="text-red-400 mb-1">4. Results</div>
            <div className="text-xs text-gray-400">
              Final rankings & analysis
            </div>
          </div>
        </div>
      </div>

      {/* Judging System */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Automated Judging Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg text-red-400">Compilation & Execution</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Source code compilation with compiler optimizations</li>
              <li>• Resource-limited execution environment</li>
              <li>• Real-time memory and time monitoring</li>
              <li>• Secure sandbox with system call filtering</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-red-400">Verdict System</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>
                • <span className="text-green-400">Accepted (AC)</span> -
                Correct solution
              </li>
              <li>
                • <span className="text-red-400">Wrong Answer (WA)</span> -
                Incorrect output
              </li>
              <li>
                •{" "}
                <span className="text-yellow-400">
                  Time Limit Exceeded (TLE)
                </span>{" "}
                - Too slow
              </li>
              <li>
                •{" "}
                <span className="text-blue-400">
                  Memory Limit Exceeded (MLE)
                </span>{" "}
                - Too much memory
              </li>
              <li>
                • <span className="text-purple-400">Runtime Error (RE)</span> -
                Crash or exception
              </li>
              <li>
                •{" "}
                <span className="text-orange-400">Compilation Error (CE)</span>{" "}
                - Failed to compile
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Platform Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl text-red-400 mb-2">2s</div>
            <div className="text-sm text-gray-400">Average Judge Time</div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl text-red-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Platform Uptime</div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl text-red-400 mb-2">1000+</div>
            <div className="text-sm text-gray-400">Concurrent Users</div>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <div className="text-2xl text-red-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Service Availability</div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Security & Integrity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg text-red-400">Code Security</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Docker-based isolation for each submission</li>
              <li>• Network access restrictions</li>
              <li>• File system sandboxing</li>
              <li>• Resource usage monitoring</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-red-400">Contest Integrity</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Plagiarism detection algorithms</li>
              <li>• IP-based access control</li>
              <li>• Submission time verification</li>
              <li>• Automated cheating detection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Admin Dashboard */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Administration Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-red-400 mb-2">Contest Management</h3>
            <p className="text-gray-300 text-sm">
              Create, schedule, and monitor contests with detailed analytics
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-red-400 mb-2">Problem Bank</h3>
            <p className="text-gray-300 text-sm">
              Manage problem sets, test cases, and difficulty ratings
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-red-400 mb-2">User Analytics</h3>
            <p className="text-gray-300 text-sm">
              Track user progress, submission patterns, and performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* API Integration */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
        <h2 className="text-2xl text-white mb-4">Developer API</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            iJudge provides a comprehensive RESTful API for third-party
            integrations and custom applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-3 rounded">
              <code className="text-green-400 text-sm">
                POST /api/submissions
              </code>
              <p className="text-gray-400 text-xs mt-1">
                Submit code for evaluation
              </p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <code className="text-green-400 text-sm">GET /api/contests</code>
              <p className="text-gray-400 text-xs mt-1">
                Retrieve contest information
              </p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <code className="text-green-400 text-sm">
                GET /api/leaderboard
              </code>
              <p className="text-gray-400 text-xs mt-1">
                Fetch current rankings
              </p>
            </div>
            <div className="bg-gray-700 p-3 rounded">
              <code className="text-green-400 text-sm">GET /api/problems</code>
              <p className="text-gray-400 text-xs mt-1">
                Access problem statements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
