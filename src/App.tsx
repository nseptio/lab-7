import { useState } from "react";
import "./App.css";

function App() {
  const [rib, setRib] = useState("");
  const [side, setSide] = useState("");
  const [squareArea, setSquareArea] = useState<number | null>(null);
  const [surfaceArea, setSurfaceArea] = useState<number | null>(null);

  const handleSquareArea = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      "http://98.80.128.118:8080/function/get-square-area",
      {
        method: "POST",
        body: JSON.stringify({ side: parseFloat(side) }),
      }
    );
    const data = await response.json();
    setSquareArea(data.square_area);
  };

  const handleSurfaceArea = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      "http://34.230.20.130:8080/function/get-cube-area",
      {
        method: "POST",
        body: JSON.stringify({ side: parseFloat(rib) }),
      }
    );
    const data = await response.json();
    setSurfaceArea(data.cube_surface_area);
  };

  return (
    <>
      {/* <h1>Lab 7 Microservices</h1> */}
      <div className="container-wrap">
        <div className="container">
          <div className="container-grid">
            <div className="container-form">
              <h2>hitung luas persegi</h2>
              <form onSubmit={handleSquareArea} className="form">
                <label id="persegi">Sisi Persegi:</label>
                <input
                  id="persegi"
                  type="number"
                  value={side}
                  onChange={(e) => setSide(e.target.value)}
                  required
                />
                <button type="submit">hitung</button>
              </form>
              {squareArea !== null && (
                <p className="result">
                  Luas Persegi: <span>{squareArea}</span>
                </p>
              )}
            </div>
            <div className="container-form">
              <h2>hitung luas permukaan kubus</h2>
              <form onSubmit={handleSurfaceArea} className="form">
                <label id="kubus">rusuk kubus:</label>
                <input
                  id="kubus"
                  type="number"
                  value={rib}
                  onChange={(e) => setRib(e.target.value)}
                  required
                />
                <button type="submit">hitung</button>
              </form>
              {surfaceArea !== null && (
                <p className="result">
                  Luas Permukaan Kubus: <span>{surfaceArea}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
