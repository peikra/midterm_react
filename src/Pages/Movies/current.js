import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import "./current.css"

const Currentmovie = ()=>{

    const params = useParams()

    
    const currentmovie = useQuery({
        queryKey :'movie', 
        queryFn : async ()=>{
        const resposne = await axios({
            method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/get',
  params: {
    output_language: 'en',
    imdb_id: params.imdbId
  },
  headers: {
    'X-RapidAPI-Key': 'f5d67249eamsh16b32058cbc76a0p1d399cjsn54f633a6c4de',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }

        })

        
        return resposne
        


    },staleTime : 200,
    refetchOnWindowFocus : false,
    refetchInterval : 200,
    retryOnMount : false
    

})



console.log(currentmovie.data?.data?.result)




    return(
        <div className="current">
             <h1 className="current_movie_title">{currentmovie.data?.data?.result?.title}</h1>
             <h2 className="current_year">year: {currentmovie.data?.data?.result?.year ? currentmovie.data?.data?.result?.year : currentmovie.data?.data?.result?.firstAirYear}</h2>
             <h3 className="current_director">director : {currentmovie.data?.data?.result?.directors ? currentmovie.data?.data?.result?.directors : currentmovie.data?.data?.result?.creators}</h3>
             <p className="genre">genre : {currentmovie.data?.data?.result?.genres.map((genre)=>genre.name)}</p>
             <p className="overwiew">{currentmovie.data?.data?.result?.overview}</p>
             <h3 className="cast">Cast: {currentmovie.data?.data?.result?.cast}</h3>


        </div>
    )
}
export default Currentmovie