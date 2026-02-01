import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center h-[64px] px-4 bg-[#0b122e]/90 backdrop-blur-md border-b border-white/10 text-white shadow-[0_8px_28px_rgba(34,211,238,0.18)] ring-1 ring-cyan-400/20"
    >
      <div>
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-cyan-300 hover:text-cyan-200 transition"
        >
          Mini Arcade Games
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/30 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] transition"
        >
          <FaPlay className="w-4 h-4 ml-px" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
