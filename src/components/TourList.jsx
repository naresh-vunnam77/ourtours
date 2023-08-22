import React from "react"
import Tour from "./Tour"

const TourList = ({ tours, removeTour }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 mt-5">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </article>
  )
}

export default TourList
