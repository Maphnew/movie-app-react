import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <nav id="globalnav" className="navigation">
        <div class="gn-content">
          <ul class="gn-list">
            <li class="gn-item gn-home"></li>
            <li class="gn-item gn-item-menu gn-movie"></li>
            <li class="gn-item gn-item-menu gn-musin"></li>
          </ul>
        </div>
      </nav>
      <header className="header"></header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
