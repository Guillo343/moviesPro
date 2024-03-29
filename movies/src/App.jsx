import "./App.css";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import { Fetch } from "./services/Fetch";
import {Home} from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Searcher />
        <Routes>
          <Route path="/Home" index element={<Home />} />
          <Route path="/Movies" />
          <Route path="/Series" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
