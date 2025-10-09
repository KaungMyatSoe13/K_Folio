"use client";

interface SlideInMenuProps {
  onProjectClick: (projectName: string) => void;
  showFloatingMenu: boolean;
  setShowFloatingMenu: (show: boolean) => void;
}

export default function SlideInMenu({
  onProjectClick,
  showFloatingMenu,
  setShowFloatingMenu,
}: SlideInMenuProps) {
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-[-7] flex items-center z-50 transition-transform duration-300 ease-in-out  ${
        showFloatingMenu ? "translate-x-0" : "translate-x-[calc(100%-3.5rem)]"
      }`}
    >
      {/* Hamburger button */}
      <button
        onClick={() => setShowFloatingMenu(!showFloatingMenu)}
        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-l-lg shadow-lg transition-colors flex-shrink-0 hover:cursor-pointer"
        title="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showFloatingMenu ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Floating menu card */}
      <div className="w-45 sm:w-72 bg-gray-800/95 backdrop-blur-lg shadow-2xl border-l border-t border-b border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-cyan-400 mb-3">Projects</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              onProjectClick("ShopShop");
              setShowFloatingMenu(false);
            }}
            className="text-left text-gray-300 text-sm py-2 px-3 hover:bg-gray-700 rounded transition-colors"
          >
            ShopShop
          </button>
          <button
            onClick={() => {
              onProjectClick("Peakfit");
              setShowFloatingMenu(false);
            }}
            className="text-left text-gray-300 text-sm py-2 px-3 hover:bg-gray-700 rounded transition-colors"
          >
            PeakFit
          </button>
          <button
            onClick={() => {
              onProjectClick("EmoFace");
              setShowFloatingMenu(false);
            }}
            className="text-left text-gray-300 text-sm py-2 px-3 hover:bg-gray-700 rounded transition-colors"
          >
            EmoFace
          </button>

          <button
            onClick={() => {
              onProjectClick("Myanglish_Translator");
              setShowFloatingMenu(false);
            }}
            className="text-left text-gray-300 text-sm py-2 px-3 hover:bg-gray-700 rounded transition-colors"
          >
            Myanglish Translator
          </button>
          <button
            onClick={() => {
              onProjectClick("KotobaLab");
              setShowFloatingMenu(false);
            }}
            className="text-left text-gray-300 text-sm py-2 px-3 hover:bg-gray-700 rounded transition-colors"
          >
            KotobaLab
          </button>
        </div>
      </div>
    </div>
  );
}
