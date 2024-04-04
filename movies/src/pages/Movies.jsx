import React from 'react'
import { UpcomingMovies } from '../components/UpcomingMovies'
import {PopularSeries} from '../components/PopularSeries'
import PopularMovies from '../components/PopularMovies'

export const Movies = () => {
  return (
    <div>
      <h2>Popular Movies</h2>
      <PopularMovies />

      <h2>Popular Series</h2>
      <PopularSeries />

      <h2>Upcoming Movies</h2>
      <UpcomingMovies />

    </div>
  )
}
