import { useEffect, useRef } from "react";
import { createGame } from "./game/Game";

function App() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      createGame(canvasRef.current);
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Nghĩa Sĩ Làng Tre</h1>
      <div ref={canvasRef} />
    </div>
  );
}

export default App;
