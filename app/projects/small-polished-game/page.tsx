"use client";

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

export default function SmallPolishedGame() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Roguelike Slot Game</h1>
      <p className="text-gray-500 text-sm mb-8">PixiJS · TypeScript · HTML5</p>

      <div
        style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}
      >
        <iframe
          src="/games/rogueLikeSlots/build/index.html"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
        <button
          onClick={() =>
            window.open("/games/rogueLikeSlots/build/index.html", "_blank")
          }
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.6)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
            backdropFilter: "blur(4px)",
          }}
        >
          ⛶ Full Screen
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">About</h2>
        <p className="text-gray-400 leading-relaxed">
          A real-time interactive slot game built with PixiJS and TypeScript.
          Features animation-driven gameplay logic, custom state machines, and
          performance-optimized rendering for both desktop and mobile.
        </p>
      </div>
    </div>
  );
}
