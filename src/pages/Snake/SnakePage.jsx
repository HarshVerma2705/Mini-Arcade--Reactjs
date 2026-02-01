import { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const ROWS = 30;
const COLS = 30;
const INITIAL_SNAKE = [
  { row: 10, col: 10 },
  { row: 10, col: 9 },
];
const INITIAL_DIRECTION = { row: 0, col: 1 };

const SnakePage = () => {
  // Game State
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ row: 5, col: 7 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const directionLocked = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [highScore, setHighScore] = useState(() => {
    const stored = localStorage.getItem("snake-high-score");
    return stored ? Number(stored) : 0;
  });

  // Score Calc
  const score = snake.length - 2;

  // Speed Calc
  const speed = Math.max(100, 300 - Math.floor(score / 5) * 40);

  // high score update
  useEffect(() => {
    if (!gameOver) return;

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snake-high-score", score);
    }
  }, [gameOver, score, highScore]);

  // Helper Func
  const generateFood = (currentSnake) => {
    while (true) {
      const newFood = {
        row: Math.floor(Math.random() * ROWS),
        col: Math.floor(Math.random() * COLS),
      };
      const isOnSnake = currentSnake.some(
        (segment) => segment.row === newFood.row && segment.col === newFood.col,
      );
      if (!isOnSnake) return newFood;
    }
  };

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setIsPaused(false);
    setIsPlaying(true);
    directionLocked.current = false;
  };

  const togglePause = () => {
    if (!isPlaying || gameOver) return;
    setIsPaused((p) => !p);
  };

  const restartGame = () => {
    startGame();
  };

  // Game Loop
  useEffect(() => {
    if (!isPlaying || isPaused || gameOver) return;

    const interval = setInterval(() => {
      setSnake((oldSnake) => {
        const head = oldSnake[0];
        const newHead = {
          row: head.row + direction.row,
          col: head.col + direction.col,
        };

        // Wall hit
        if (
          newHead.row < 0 ||
          newHead.row >= ROWS ||
          newHead.col < 0 ||
          newHead.col >= COLS
        ) {
          setGameOver(true);
          setIsPlaying(false);
          return oldSnake;
        }

        // Self hit
        const hitSelf = oldSnake
          .slice(1) // skip current head
          .some((s) => s.row === newHead.row && s.col === newHead.col);

        if (hitSelf) {
          setGameOver(true);
          setIsPlaying(false);
          return oldSnake;
        }

        // Eat food
        const ateFood = newHead.row === food.row && newHead.col === food.col;
        directionLocked.current = false;

        if (ateFood) {
          setFood(generateFood(oldSnake));
          return [newHead, ...oldSnake];
        }
        return [newHead, ...oldSnake.slice(0, -1)];
      });
    }, speed); 

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, gameOver, direction, food, speed]);

  // controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !isPlaying && !gameOver) {
        e.preventDefault();
        startGame();
        return;
      }
      if (e.key === " " && isPlaying && !gameOver) {
        e.preventDefault();
        togglePause();
        return;
      }

      // Movement
      if (!isPlaying || isPaused || gameOver) return;

      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (keys.includes(e.key)) {
        e.preventDefault();

        if (directionLocked.current) return;

        setDirection((prev) => {
          let next = prev;
          switch (e.key) {
            case "ArrowUp":
              if (prev.row !== 1) next = { row: -1, col: 0 };
              break;
            case "ArrowDown":
              if (prev.row !== -1) next = { row: 1, col: 0 };
              break;
            case "ArrowLeft":
              if (prev.col !== 1) next = { row: 0, col: -1 };
              break;
            case "ArrowRight":
              if (prev.col !== -1) next = { row: 0, col: 1 };
              break;
          }
          if (next !== prev) directionLocked.current = true;
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isPaused, gameOver]);

  return (
    <div className=" min-h-screen w-full   bg-linear-to-br from-[#2b3340] via-[#303a4a] to-[#1f2633] flex flex-col items-center py-4 px-4 sm:px-8 gap-4 overflow-auto md:overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col gap-4 min-h-[calc(100vh-2rem)] md:h-[calc(100vh-2rem)]">
        <Header
          isPlaying={isPlaying}
          isPaused={isPaused}
          onPlay={startGame}
          onPause={togglePause}
          score={score}
          highScore={highScore}
        />

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Game Board */}
          <div className="flex-1 flex justify-center items-start min-w-0">
            <LeftContent
              snake={snake}
              food={food}
              gameOver={gameOver}
              score={score}
              highScore={highScore}
              onRestart={restartGame}
              ROWS={ROWS}
              COLS={COLS}
            />
          </div>

          {/* Controls */}
          <div className="w-full md:w-[360px] lg:w-[400px] shrink-0">
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakePage;
