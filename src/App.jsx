import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SnakePage from "./pages/Snake/SnakePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Navbar */}
      <div className="shrink-0">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="flex-1 min-h-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snake" element={<SnakePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
