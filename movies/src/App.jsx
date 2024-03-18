import './App.css'
import { Searcher } from './components/Searcher'
import { Fetch } from './services/Fetch'

function App() {

  return (
    <div>
      <Searcher />
      <Fetch />
    </div>
  )
}

export default App
