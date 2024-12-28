import React from 'react'
import Link from 'next/link'



const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center px-5 ">
    <div className="bg-yellow-100 md:h-[50%] md:w-[50%] md:space-y-10 hover:scale-105 transition-transform duration-200 p-6 rounded-lg shadow-lg hover:shadow-xl">
      <h1 className="font-bold text-3xl text-center md:text-4xl">Welcome! Here is a Data Fetching Program</h1>
      <p className="text-green-900 mt-2 md:text-xl text-center">Choose one of the options for data fetching!</p>
      <div className="flex flex-col items-center gap-4 md:gap-12 mt-4 sm:flex-row justify-center ">
        <Link href="/Client-side-rendering">
          <button className="w-full sm:w-auto px-6 py-2 rounded-md bg-[#8884FC] hover:bg-gray-100 text-white hover:text-black">
            Client Side Rendering
          </button>
        </Link>
        <Link href="/server-side-rendering">
          <button className="w-full sm:w-auto px-6 py-2 rounded-md bg-[#8884FC] hover:bg-gray-100 text-white hover:text-black">
            Server Side Rendering
          </button>
        </Link>
      </div>
    </div>
  </div>

  )
}

export default Home
