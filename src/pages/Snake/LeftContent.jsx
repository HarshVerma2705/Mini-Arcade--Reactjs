import clsx from "clsx";

const LeftContent = ({
  snake,
  food,
  gameOver,
  score,
  highScore,
  onRestart,
  ROWS,
  COLS,
}) => {
  const isCellHead = (row, col) =>
    snake[0]?.row === row && snake[0]?.col === col;

  const isCellInSnake = (row, col) =>
    snake.some((s) => s.row === row && s.col === col);

  const isCellFood = (row, col) => food.row === row && food.col === col;

  return (
    <div
      className="relative grid w-full max-w-[65vmin] aspect-square rounded-2xl bg-[#0f1a3a] shadow-[0_0_32px_rgba(34,211,238,0.18)] inset_0_0_16px_rgba(0,0,0,0.25)] ring-2 ring-cyan-400/25"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {/* Board cells */}
      {Array.from({ length: ROWS }).map((_, row) =>
        Array.from({ length: COLS }).map((_, col) => (
          <div
            key={`${row}-${col}`}
            className={clsx({
              "bg-cyan-500 rounded-md": isCellHead(row, col),
              "bg-cyan-300 rounded-md":
                isCellInSnake(row, col) && !isCellHead(row, col),
              "bg-rose-500 ": isCellFood(row, col),
            })}
          />
        )),
      )}

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/70 backdrop-blur-sm + shadow-[inset_0_0_40px_rgba(34,211,238,0.12)] ">
          <div className="text-center space-y-4 px-6">
            <h2 className="text-3xl font-semibold text-rose-500">Game Over</h2>
            <div className="text-sm text-white/80 space-y-1">
              <p>Score: <span className="font-semibold text-white">{score}</span></p>
              <p>High Score: <span className="font-semibold text-yellow-400">{Math.max(score, highScore)}</span></p>
            </div>
            <button
              onClick={onRestart}
              className="mt-2 px-6 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-00 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] text-white font-semibold transition"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftContent;
