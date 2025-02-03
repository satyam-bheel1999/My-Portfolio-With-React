import React from 'react'

function Home() {
  return (
    <div className='h-screen w-screen text-white flex flex-row
    justify-around relative top-12'>
      <div className='h-52'>
        <p className='text-2xl font-bold'>Hi I am <span className='text-green-500'>Satyam Bheel</span> </p> <br />
        <p>Front-End Developer</p> <br />
        <p>(React Js, Tailwind Css)</p>
      </div>
      <div>
        <img src='src\Images\my image.png'></img>
      </div>
    </div>
  )
}

export default Home
