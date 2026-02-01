const Header = ({ isPlaying, isPaused, onPlay, onPause, score, highScore }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-cyan-400/15 shadow-[inset_0_0_18px_rgba(34,211,238,0.18)]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold text-cyan-300 tracking-wide">
            Snake
          </h1>

          <div className="flex gap-4 text-sm">
            <div className="px-3 py-1 rounded-lg bg-white/5 border border-cyan-400/20">
              <span className="opacity-60 text-white">Score</span>
              <span className="ml-2 font-semibold text-cyan-300 ">{score}</span>
            </div>

            <div className="px-3 py-1 rounded-lg bg-white/5 border border-cyan-400/20">
              <span className="opacity-60 text-white">High Score</span>
              <span className="ml-2 font-semibold text-yellow-400">
                {highScore}
              </span>
            </div>
          </div>
        </div>
      </div>

      {!isPlaying ? (
        <button
          onClick={onPlay}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition"
        >
          Play
        </button>
      ) : (
        <button
          onClick={onPause}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}
    </div>
  );
};

export default Header;
