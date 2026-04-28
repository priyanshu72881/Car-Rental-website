import React from 'react'

const Title = ({ title, subTitle, align = "center" }) => {

  const isLeft = align === "left"

  return (
    <div
      className={`flex flex-col justify-center
      ${isLeft ? "items-start text-left" : "items-center text-center"}`}
    >

      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>

      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl">
        {subTitle}
      </p>

    </div>
  )
}

export default Title