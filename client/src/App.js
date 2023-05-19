import { useEffect, useState } from "react";
const API_BASE = "http://localhost:3000";

function App() {
  const [dailyt, setDailyt] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newDaily, setNewDaily] = useState("");

  useEffect(() => {
    GetDailyt();
  }, []);

  const GetDailyt = () => {
    fetch(API_BASE + "/dailyt")
      .then((res) => res.json())
      .then((data) => setDailyt(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeDaily = async (id) => {
    const data = await fetch(API_BASE + "/dailyt/complete/" + id).then((res) =>
      res.json()
    );

    setDailyt((dailyt) =>
      dailyt.map((daily) => {
        if (daily._id === data._id) {
          daily.complete = data.complete;
        }

        return daily;
      })
    );
  };

  const deleteDaily = async (id) => {
    const data = await fetch(API_BASE + "/dailyt/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setDailyt((dailyt) =>
      dailyt.filter((daily) => daily._id !== data.result._id)
    );
  };

  return (
    <div className="App">
      <h1>Hola, Margot!</h1>
      <h4>Tus tareas para el dia</h4>

      <div className="dailyt">
        {dailyt.map((daily) => (
          <div
            className={"daily " + (daily.complete ? "is-complete" : "")}
            key={daily._id}
            onClick={() => completeDaily(daily._id)}
          >
            <div className="checkbox"></div>

            <div className="text">{daily.text}</div>

            <div
              className="delete-dailyt"
              onClick={() => deleteDaily(daily._id)}
            >
              x
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
