import { useQuery } from "react-query";
import Header from "../../Header"
import axios from 'axios';
import { useState } from "react";
import "./movies.css"
import { useNavigate } from "react-router-dom";

const Movies = ()=>{
    
    const [data,setdata] = useState("")

    const movies = useQuery({
        queryKey :'movies', 
        queryFn : async ()=>{
        const resposne = await axios({
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/filters',
            params: {
              services: 'netflix',
              country: 'us',
              output_language: 'en',
              order_by: 'original_title',
              genres_relation: 'and',
              show_type: 'all'
            },
            headers: {
                'X-RapidAPI-Key': 'f5d67249eamsh16b32058cbc76a0p1d399cjsn54f633a6c4de',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }

            
        })
        setdata(resposne)

        
        


    },staleTime : 200,
    refetchOnWindowFocus : false,
    refetchInterval : 200,
    retryOnMount : false
    

})


   const navigate = useNavigate()

    return(
        <div>
            <Header/>
            <main>
            <div>
                    <div className="formovies">
                        
                        {movies.isSuccess &&   data.data?.result?.map((movie,i)=>(
                            
                            <div key={i} className="movie" onClick={(e)=>{
                                
                                
                                

                                
                                    navigate(`${movie.title.startsWith('#') ? movie.title.substring(1) : movie.title}/${movie.imdbId}` ) 

                                
                            
                            }
                                
                                
                                
                                }>
                                
                                <h1 className="movie_title">{movie.title}</h1>
                                <h2 className="year">year: {movie.year ? movie.year : movie.firstAirYear}</h2>
                                <h3 className="director">director : {movie.directors ? movie.directors : movie.creators}</h3>
                                <p className="genre">genre : {movie.genres.map((genre)=>genre.name)}</p>
                                
                            </div>
                            
                            
                        ))}
                        

                    </div>
                </div>
            </main>

        </div>
        
    )
}

export default Movies