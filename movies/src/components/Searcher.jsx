import React, {useState} from 'react'
import { Fetch } from '../services/Fetch'

export const Searcher = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <h1>Search Movies </h1>
      <input type="text" placeholder='Enter a movie title...'
              value={searchQuery} onChange={handleSearchQuery} />
      <Fetch searchQuery={searchQuery}/>
    </div>
  )
}
