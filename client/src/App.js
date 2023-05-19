import { useEffect, useState } from "react";
const API_BASE = "http://localhost:3000";

function App() {
  const [dailyt, setDailyt] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newDaily, setNewDaily] = useState("");

  useEffect(() => {
    GetDailyt();

    console.log(dailyt);
  }, []);

  const GetDailyt = () => {
    fetch(API_BASE + "/dailyt")
      .then((res) => res.json())
      .then((data) => setDailyt(data))
      .catch((err) => console.error("Error: ", err));
  };

  return (
    <div className="App">
      <h1>Hola, Margot!</h1>
      <h4>Tus tareas para el dia</h4>

      <div className="dailyt">
        <div className="daily">
          <div className="checkbox"></div>

          <div className="text">Hacer ejercicio</div>

          <div className="delete-dailyt">x</div>
        </div>

        <div className="daily is-complete">
          <div className="checkbox"></div>

          <div className="text">Maditar</div>

          <div className="delete-dailyt">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;
