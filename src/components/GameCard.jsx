import { Link } from "react-router-dom";

const GameCard = ({ title, Icon, route, status }) => {
  const isDisabled = status !== "live";

  return (
    <div
      className="
        relative w-full max-w-sm h-[360px] rounded-2xl p-6 bg-[#020617]
        border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(34,211,238,0.15)]
      "
    >
      {/* Title */}
      <h3 className="text-xl font-semibold tracking-wide text-cyan-300">
        {title}
      </h3>

      {/* Icon */}
      <div
        className="
        w-28 h-28 rounded-xl bg-black/40 border border-cyan-400/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.15)] flex items-center justify-center
        
      "
      >
        <Icon size={64} className="text-cyan-300" />
      </div>

      {/* Action */}
      {isDisabled ? (
        <div className="px-6 py-2 rounded-md bg-white/5 text-white/50 text-sm">
          Coming Soon
        </div>
      ) : (
        <Link
          to={route}
          className="
            px-8 py-2 rounded-md tracking-wide bg-cyan-500 text-black font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition

          "
        >
          PLAY
        </Link>
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-cyan-400/40 rounded-full" />
    </div>
  );
};

export default GameCard;
