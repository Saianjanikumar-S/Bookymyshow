import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
//48635e  8d9392
const MovieHero = () => {
    return(
        <>
        
        <div className="md:hidden">
        <img 
        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-27-07-2021-11-33-17.jpg"
        alt="poster"
        />
        </div>
        <div className="hidden md:block lg:hidden">
        <img 
        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-27-07-2021-11-33-17.jpg"
        alt="poster"
        
        />
        </div>
        <div className="hidden lg:block"style={{height: "40rem"}}>
        <div className="absolute h-full w-full z-10" 
        style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",height:"640px"}}
        />
        <div className="absolute z-30 w-64 h-96 left-64 top-20">
            <img 
            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-27-07-2021-11-33-17.jpg"
            alt="poster"
            className="h-full w-full rounded-xl"
            />
        </div>
        <div className="absolute z-20 text-white" style={{marginLeft: "35rem",marginTop: "4rem"}}>
            <h1 className="text-4xl font-bold">RRR</h1><br/>
            <div className="flex flex-row items-center">
            <h1 className="text-xl font-bold flex flex row items-center"> <BiLike /> 84.3K</h1>
            <p className=""style={{marginLeft: "10px"}}>are interested</p>
            </div>
            <div className="rounded-lg px-3 py-1 my-4 flex items-center" style={{border: "1px solid white"}}>
                <div>
                <h1>Releasing in 2021</h1>
                <p>Mark interested to know when bookings open</p>
                </div>
                <div style={{marginRight: "5px"}}><button className="w-full h-full mx-2 px-2 py-1 rounded text-black bg-bhargav-600" >I'm interested</button></div>
            </div>
            <div className="flex flex-row">
                <div>
                    <h1 className="bg-bhargav-600 text-black font-medium px-1 rounded">2D</h1>
                </div>
                <div className="bg-bhargav-600 text-black font-medium px-1 rounded " style={{marginLeft:"10px"}}>
                    <h1>
                        <a href="#" className="hover:underline">Telugu,</a>
                        <a href="#" className="hover:underline">Malayalam,</a>
                        <a href="#" className="hover:underline">Kannada,</a>
                        <a href="#" className="hover:underline">Tamil,</a>
                        <a href="#" className="hover:underline">Hindi</a>
                    </h1>
                </div>
            </div>
            <br />
            <div className="text-white font-medium">
                    <h1>
                        <a href="#" className="hover:underline">Action,</a>
                        <a href="#" className="hover:underline">Drama,</a>
                        <a href="#" className="hover:underline">Historical,</a>
                        <a href="#" className="hover:underline">Period</a>
                        
                    </h1>
                </div>
                <button className="my-8 px-12 py-3 rounded-md" style={{backgroundColor:"#F95370"}}>Book Tickets</button>

        </div>

        <div className="absolute z-30 flex flex-row items-center px-3 py-1 rounded-lg" style={{marginLeft: "80rem",color:"#f4f4f4",backgroundColor:"black",opacity:"0.5", marginTop:"3rem", fontSize:"20px"}}>
            
                <div>
                <AiOutlineShareAlt style={{fontSize:"40px"}} />
                </div>
                <div style={{paddingLeft: "0.5rem"}}>
                    Share
                </div>
            
        </div>
        <img 
        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-27-07-2021-11-33-17.jpg"
        alt="poster"
        className="w-full h-full"
        />
        </div>
        </>
    );
};


export default MovieHero;