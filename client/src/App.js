function App() {
  return (
    <div className="App">
      <h1>Hola, Margot!</h1>
      <h4>Tus tareas para el dia</h4>

      <div className="dailyt">
        <div className="dailyt">
          <div className="checkbox"></div>
          <div className="text">Hacer ejercicio</div>
          <div className="delete-dailyt">x</div>
        </div>
        <div className="dailyt complete">
          <div className="checkbox"></div>
          <div className="text">Maditar</div>
          <div className="delete-dailyt">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;
