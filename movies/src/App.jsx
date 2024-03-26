import "./App.css";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import { Fetch } from "./services/Fetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Searcher />
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
