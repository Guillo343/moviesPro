import "./App.css";
import { Nav } from "./components/Nav";
import { Searcher } from "./components/Searcher";
import PopularMovies from './components/PopularMovies'
import { Footer } from "./components/Footer";
import {Movies} from './pages/Movies'
import {Series} from './pages/Series'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Nav />
        <Searcher />
        <Routes>
          <Route path="/Movies" index element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
