import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import CastCarousalSlider from "../components/MovieHero/CastCarousal";
import CrewCarousalSlider from "../components/MovieHero/CrewCarousal";

import MovieHero from "../components/MovieHero/MovieHero.component";
const Movie = () => {

    

    return(
        <>
        <MovieHero />
        <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-64">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.</p>
            </div>
            <div>
                <hr className="my-8" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">Applicable offers</h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 ">
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                        <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                    </div>
                </div>
            </div>
            <div>
                <hr className="my-8" />
            </div>
            <div className="my-4">
                <h1 className="text-2xl font-bold">Cast</h1>
            </div>

            <CastCarousalSlider  />
            <div>
                <hr className="my-8" />
            </div>
            <div className="my-4">
                <h1 className="text-2xl font-bold">Crew</h1>
            </div>

            <CrewCarousalSlider  />



        </div>
        </>
    );
};


export default Movie;