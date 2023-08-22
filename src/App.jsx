import React, { useEffect, useState } from "react"
import Loading from "./components/Loading"
import TourList from "./components/Tourlist"

const url = "https://course-api.com/react-tours-project"

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(false)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  return (
    <section className="bg-gray-300 text-black min-h-screen min-w-screen items-center justify-center ">
      <h2 className="text-white text-2xl text-center font-semibold p-5 bg-gray-900 underline ">
        PackBag Tours 🐱‍🏍
      </h2>

      {loading ? (
        <Loading />
      ) : (
        <TourList tours={tours} removeTour={removeTour} />
      )}
    </section>
  )
}

export default App
