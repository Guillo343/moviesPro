import React from 'react'
import { UpcomingMovies } from '../components/UpcomingMovies'
import PopularMovies from '../components/PopularMovies'

export const Movies = () => {
  return (
    <div>
      <PopularMovies />

      <UpcomingMovies />

    </div>
  )
}
