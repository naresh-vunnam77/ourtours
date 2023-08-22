import React, { useState } from "react"

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="flex flex-col m-2 bg-gray-100 text-black shadow-xl rounded-sm shadow-gray w-full max-h-[700px]">
      <div class="relative h-0 pb-[70%]">
        <img
          src={image}
          alt={name}
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">
          {name}
          <span className="mx-5 text-green-600">{price} $</span>
        </h2>
        <p class="text-gray-600">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-blue-500 font-semibold"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "....show less" : "...read more"}
          </button>
        </p>
      </div>
      <button
        className="bg-blue-900 p-3 text-white mx-10 mb-5 text-center font-semibold shadow-md shadow-black rounded-sm"
        onClick={() => {
          removeTour(id)
        }}
      >
        Not interested
      </button>
    </article>
  )
}

export default Tour
