import GameCard from "../components/GameCard";
import { games } from "../data/game";

// Home.jsx
const Home = () => {
  return (
    <div
      className="min-h-screen w-full bg-linear-to-br from-[#2b3340] via-[#303a4a] to-[#1f2633] overflow-y-auto"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="font-pixel text-3xl md:text-4xl text-cyan-300 tracking-widest opacity-90 mb-16 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">GAMES AVAILABLE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              Icon={game.icon}
              route={game.route}
              status={game.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
