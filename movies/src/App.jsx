import "./App.css";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import { Fetch } from "./services/Fetch";
import { BroserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
