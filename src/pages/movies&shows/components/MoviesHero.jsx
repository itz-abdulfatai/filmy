import { useState } from "react";
import Button from "../../../components/Button";
import { assets } from "../../../assets/icons";

// export const avengersImg = require('../../../src/assets/images/avengers.jpg')

// import avengersImg from '../../../assets/images/avengers.jpg'

import { avengersImg, civilWars, infinityWars } from "../../../assets/images";


function MoviesHero() {
  const movies = [
    {
      name: "Avengers : endgame",
      description:
        "with the help of the remaining allies, the Avengers must assemble once more in order to undo thanos actions and undo the chaos in the universe. no matter who the face..... Avenge the fallen.",
      image: avengersImg,
    },
    {
      name: "Avengers : infinity wars",
      description:
        "this sis the first part of the avengers last run... where tarnos made a half of the universe varnish.",
      image: infinityWars,
    },

    {
      name: "captain americe : civil war",
      description:
        "this is the first part of all... where cap cause wahala and made every body help him fix...... also they went to nigeria.",
      image: civilWars,
    }
  ];
  const [activeMovie, setActiveMovie] = useState(0);

  return (
    <div
      className=" rounded-lg h-[70vh] sm:h-[85vh]  flex flex-col justify-end items-center gap-4 sm:gap-3 pb-5 relative bg-cover bg-center sm:bg-bottom"
      style={{
        backgroundImage: `url(${movies[activeMovie].image})`,
      }}
    >
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-transparent bg-gradient-to-b from-transparent to-primary from-0%"></div>
      <div className="w-2/3 sm:w-3/5 h-1/3  flex flex-col justify-end items-center z-10">
        <h2 className=" capitalize text-2xl sm:text-xl font-bold">
          {movies[activeMovie].name}
        </h2>
        <p className=" hidden sm:block ash-text text-center">
          {movies[activeMovie].description}
        </p>
      </div>
      <div className=" w-[70%] flex flex-col items-center sm:items-center gap-x-3 gap-y-5 justify-center sm:flex-row z-10">
        <Button
          text={"play now"}
          icon={assets.play}
          bg={"accent"}
          style={"w-full"}
        />
        <div className=" flex justify-between items-center gap-2">
          <button className=" bg-primary border border-secondary p-3 sm:p-2 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary">
            <img src={assets.plus} alt="" />
          </button>
          <button className=" bg-primary border border-secondary p-3 sm:p-2 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary">
            <img src={assets.like} alt="" />
          </button>
          <button className=" bg-primary border border-secondary p-3 sm:p-2 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary">
            <img src={assets.volumeFull} alt="" />
          </button>
        </div>
      </div>
      <div className=" hidden sm:grid  w-full px-10 featured-nav z-10">
        <button className=" justify-self-start    bg-primary border border-secondary p-1 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary" onClick={() => {
          if (activeMovie > 0 ) {
            setActiveMovie(activeMovie - 1)
            console.log(activeMovie)

          } 
        }}>
          {" "}
          <img src={assets.arrowLeft} alt="" />
        </button>

        {/* 3 buttons start */}
        <div className=" flex justify-center items-center gap-1">
          <button>
            <div className=" bg-accent rounded w-5 h-1 "></div>
          </button>
          <button>
            <div className=" bg-secondary rounded w-5 h-1 md:hover:bg-primary"></div>
          </button>

          <button>
            <div className=" bg-secondary rounded w-5 h-1 md:hover:bg-primary"></div>
          </button>
        </div>

        {/* 3 buttons end */}
        <button className=" justify-self-end    bg-primary border border-secondary p-1 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary" onClick={() => {
          if (activeMovie < 2 ) {
            setActiveMovie(activeMovie + 1)
            console.log(activeMovie)
          }
          
        }}>
          
          <img src={assets.arrowRight} alt="" />
        </button>
      </div>
      {/* transparent overlap */}
      
    </div>
  );
}

export default MoviesHero;
