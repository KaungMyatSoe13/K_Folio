import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Music, Trophy, Gamepad2, Plane } from "lucide-react";
import { benzinSemibold } from "../../app/fonts/fonts";
import { vt323 } from "../../app/fonts/fonts";
import { FaSpotify } from "react-icons/fa";
import { s } from "framer-motion/client";
import TypingText from "../ui/TypingText";
import AnimatedCard from "../ui/AnimatedCard";
import {
  sections,
  artists,
  countries,
  timeRanges,
} from "../../components/data/beyondTech";

const BeyondTech = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePlay = (id: string, songUrl: string) => {
    if (playingId && audioRefs.current[playingId]) {
      audioRefs.current[playingId].pause();
      audioRefs.current[playingId].currentTime = 0;
    }

    if (playingId === id) {
      setPlayingId(null);
      return;
    }

    if (!audioRefs.current[id]) {
      audioRefs.current[id] = new Audio(songUrl);

      if (timeRanges[id]) {
        audioRefs.current[id].addEventListener("timeupdate", () => {
          if (audioRefs.current[id].currentTime >= timeRanges[id].end) {
            audioRefs.current[id].currentTime = timeRanges[id].start;
          }
        });
      }

      audioRefs.current[id].addEventListener("ended", () => setPlayingId(null));
    }

    // Always reset to start time before playing
    if (timeRanges[id]) {
      audioRefs.current[id].currentTime = timeRanges[id].start;
    } else {
      audioRefs.current[id].currentTime = 0;
    }

    audioRefs.current[id].play();
    setPlayingId(id);
  };

  const handleArtistHover = (
    artistId: string,
    songUrl: string,
    e: React.MouseEvent
  ) => {
    setHoveredArtist(artistId);
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isMobile) {
      handlePlay(artistId, songUrl);
    }
  };

  const handleArtistMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleArtistMouseLeave = () => {
    setHoveredArtist(null);
    if (!isMobile && playingId && audioRefs.current[playingId]) {
      audioRefs.current[playingId].pause();
      audioRefs.current[playingId].currentTime = 0;
      setPlayingId(null);
    }
  };

  const handleGameHover = (gameId: string, e: React.MouseEvent) => {
    setHoveredGame(gameId);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleGameMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleGameMouseLeave = () => {
    setHoveredGame(null);
  };

  return (
    <div className={`min-h-screen bg-gray-900 overflow-x-hidden`}>
      {/* Header */}
      <div className="max-w-6xl mx-auto pt-10 px-4 sm:px-6">
        <div className="mb-16">
          <AnimatedCard
            className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 ${benzinSemibold.className}`}
            delay={0.1}
          >
            Beyond the Code
          </AnimatedCard>

          <TypingText
            text={
              "Life's more than syntax and algorithms. Here's what makes me tick outside of tech."
            }
            className={`text-base sm:text-xl text-gray-400 max-w-2xl ${vt323.className}`}
            charDelay={0.05}
            startDelay={0}
          ></TypingText>
        </div>

        {/* Section Cards */}
        <AnimatedCard className="grid grid-cols-1 gap-4 mb-12 sm:relative sm:-mx-6 md:mx-0 ">
          <div className="sm:overflow-x-auto sm:scrollbar-hide sm:px-6 md:px-0 overflow-y-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:pb-4 md:pb-0">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() =>
                      setActiveSection(
                        activeSection === section.id ? null : section.id
                      )
                    }
                    className={`group border bg-gray-500/10 hover:bg-gray-600/50 relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 sm:flex-shrink-0 sm:min-w-[320px] ${
                      activeSection === section.id
                        ? "ring-white bg-gray-600/100"
                        : "ring-transparent"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <Icon className="w-12 h-12 text-white mb-4" />
                      <h3 className="text-2xl font-bold text-white">
                        {section.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedCard>

        {/* Music Section */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeSection === "music"
              ? "max-h-[2000px] opacity-100 mb-20"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h2
              className={`text-3xl font-bold text-white mb-8 ${benzinSemibold.className}`}
            >
              Music I Vibe To
            </h2>
            <div className="bg-gray-800/50 p-4  ">
              <ol className="space-y-4">
                {artists.map((artist, index) => (
                  <li
                    key={artist.id}
                    className="flex items-center justify-between text-xl text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-4 border-b border-gray-700 last:border-0"
                    onMouseEnter={(e) =>
                      handleArtistHover(artist.id, artist.songUrl, e)
                    }
                    onMouseMove={handleArtistMouseMove}
                    onMouseLeave={handleArtistMouseLeave}
                  >
                    <a
                      href={artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <span className="text-gray-500 font-bold text-lg w-8">
                          {index + 1}/.
                        </span>
                        <div>
                          <div className="font-semibold">{artist.name}</div>
                        </div>
                      </div>
                    </a>

                    {/* Play Button for Mobile */}
                    {isMobile && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlay(artist.id, artist.songUrl);
                        }}
                        className="ml-4 w-10 h-10 rounded-full bg-transparent  flex items-center justify-center transition-colors duration-300"
                      >
                        {playingId === artist.id ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        )}
                      </button>
                    )}

                    {/* Now Playing Indicator for Desktop */}
                    {!isMobile && playingId === artist.id && (
                      <div className="flex items-center gap-1 ml-4">
                        <div
                          className="w-1 h-3 bg-purple-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-1 h-5 bg-purple-500 rounded-full animate-pulse"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-1 h-4 bg-purple-500 rounded-full animate-pulse"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <div className="">
              <a
                href="https://open.spotify.com/user/31nfaz5hru7raagi72exci2vsoca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/50 mt-5 hover:bg-green-600 text-white font-semibold transition-colors duration-300"
              >
                Lets Share our Taste:
                <FaSpotify className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Gaming Section */}

        {/* Travel Section */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeSection === "travel"
              ? "max-h-[3000px] opacity-100 mb-20"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Places I've Explored
            </h2>
            <div className="space-y-4">
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedCountry(
                        expandedCountry === country.id ? null : country.id
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🌍</span>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-white">
                          {country.name}
                        </h3>
                        <p className="text-sm text-gray-400">{country.year}</p>
                      </div>
                    </div>
                    <span
                      className={`text-white transition-transform duration-300 ${
                        expandedCountry === country.id ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedCountry === country.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 flex flex-col gap-4">
                      {country.photos.map((photo, index) => (
                        <div
                          key={index}
                          className="group overflow-hidden rounded-lg aspect-video bg-gray-700"
                        >
                          <img
                            src={photo}
                            alt={`${country.name} ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Album Cover on Cursor */}
      {hoveredArtist && !isMobile && activeSection === "music" && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: `${cursorPos.x + 20}px`,
            top: `${cursorPos.y + 20}px`,
          }}
        >
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-500/50">
            <img
              src={
                artists.find((artist) => artist.id === hoveredArtist)?.image ||
                ""
              }
              alt="Album cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BeyondTech;
