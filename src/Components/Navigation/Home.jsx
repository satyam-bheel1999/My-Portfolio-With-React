import React from 'react'
import { useState, useEffect } from "react";
import Projects from './Projects';


function Home() {
  const text = "Hi I am Satyam Bheel...."; // Your text to type
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 200); // Typing speed (adjust as needed)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <>
    <div className="h-screen w-screen text-white flex flex-row justify-around relative top-12">
      <div className="h-52 w-2xl">
        {/* Typing Effect in p tag */}
        <p className="text-2xl font-bold text-emerald-500">
          {displayText}
          <span className="animate-blink">|</span>
        </p>
        <p>Front-End Developer</p>
        <p>(React Js, Tailwind Css)</p>
      </div>
      <div>
        <img src="src/Images/myimg.png" className="rounded-2xl" alt="My Image" />
      </div>
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.8s infinite;
          }
        `}
      </style>
    </div>

    <Projects/>

    </>

  );
}

export default Home
