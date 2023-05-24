import { useEffect, useState } from "react";
const API_BASE = "https://mern-deploy1-backend.onrender.com";
//after deploying your backend you have to now use the link from render
//instead of "http://localhost:3001"

function App() {
  const [dailyt, setDailyt] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newDaily, setNewDaily] = useState("");

  useEffect(() => {
    GetDailyt();
  }, []);

  const GetDailyt = () => {
    fetch(API_BASE + "/dailyt", {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    setDailyt((dailyt) =>
      dailyt.filter((daily) => daily._id !== data.result._id)
    );
  };

  const addDaily = async () => {
    const data = await fetch(API_BASE + "/dailyt/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newDaily,
      }),
    }).then((res) => res.json());

    //console.log(data);

    setDailyt([...dailyt, data]);

    setPopupActive(false);
    setNewDaily("");
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

      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            x
          </div>
          <div className="content">
            <h3>Add Task</h3>

            <input
              type="text"
              className="add-daily-input"
              onChange={(e) => setNewDaily(e.target.value)}
              value={newDaily}
            />
            <div className="button" onClick={addDaily}>
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
