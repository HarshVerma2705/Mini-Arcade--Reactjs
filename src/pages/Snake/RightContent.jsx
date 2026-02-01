const RightContent = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-[#020617] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col gap-6 text-gray-200 ring-1 ring-white/10">
      <h3 className="text-xl md:text-2xl text-center font-semibold tracking-wide text-cyan-300 uppercase">
        Controls
      </h3>

      <div className=" border border-cyan-400/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.12)] rounded-xl p-4 space-y-2 ring-1 ring-cyan-400/20 text-white/60">
        <h4 className="text-base font-semibold text-white">How to Play</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          Guide the snake to eat food and grow longer. Avoid hitting the walls
          or your own body.
        </p>
      </div>

      <div className=" border border-cyan-400/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.12)] rounded-xl p-4 space-y-3 ring-1 ring-cyan-400/20 text-white/60">
        <h4 className="text-base font-semibold text-white">Key Bindings</h4>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-200">Arrow Keys</span>
          <span className="text-gray-400">Move Snake</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-200">Enter</span>
          <span className="text-gray-400">Start Game</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-200">Space</span>
          <span className="text-gray-400">Pause / Resume</span>
        </div>
      </div>
      <div className="mt-auto text-center text-xs text-gray-500">
        Tip: The snake gets faster as you score more.
      </div>
    </div>
  );
};

export default RightContent;
