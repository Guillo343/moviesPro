import React from 'react'

export const TopCard = ({posterSrc, name, year, rating, genres, summary}) => {
  return (
    <div className='top-card'>
        <div className="grid-card">
            <div className="poster-card">
                <img src={posterSrc} alt={name} className='grid-poster' />
            </div>
            <div>
                <div>
                    <h1>{name}</h1>
                </div>
                <div>
                    <h2>{`(${year})`}</h2>
                </div>
                <div className="rating-div">
                    <h3>{ `${rating} Average Rating` }</h3>
                </div>
                <div>
                    <h3>{genres}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
