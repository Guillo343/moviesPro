import "./App.css";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import PopularMovies from './components/PopularMovies'
import { Footer } from "./components/Footer";
// import { Fetch } from "./services/Fetch";
import {Movies} from './pages/Movies'
import {Series} from './pages/Series'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Searcher />
        <PopularMovies />
        <Routes>
          <Route path="/Movies" index element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
