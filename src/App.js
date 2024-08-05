import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ellen-zorzetto-1a1777b5/"
            target="_blank"
          >
            Ellen Zorzetto
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/ellenzorzetto3/react-try-6"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
