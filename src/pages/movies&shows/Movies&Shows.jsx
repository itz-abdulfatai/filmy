import { useEffect } from "react";
import Slider from "../../components/Slider";
import VideoCard from "../../components/VideoCard";
import MoviesHero from "./components/MoviesHero";
import MovieList from "../../components/MovieList";
import useFetchLists from "../../hooks/useFetchLists";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import LoadingError from "../../components/LoadingError";
// const tmdbBaseUrl = 'https://image.tmdb.org/t/p/original';

export default function MoviesAndShows() {
  


const popularTv = useFetchLists('/tv/ertytuytrse')


  return (
    <div>
      {/* featured trailer */}

      <section className=" bg-primary pt-20  px-2 md:px-10">
        <MoviesHero />
      </section>

      <section className=" bg-primary pt-20  px-2 md:px-10">
        
        <div>

          






  
  <MovieList title={'popular tv shows'} endpoint={'/tv/popular'}/>





</div>

      {/* <Loading/> */}


      <MovieList title={'second title'}>
  
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </MovieList>

      </section>
      {/* movies genres */}

      {/* top ten in movie genres */}

      {/* trending movies  */}

      {/* new released movies  */}

      {/* must watch movies  */}

      {/* shows genres */}

      {/* top ten in shows genres */}

      {/* trending shows */}

      {/* new reliesed shows */}

      {/* must watch shows */}

      {/* cta */}
    </div>
  );
}

