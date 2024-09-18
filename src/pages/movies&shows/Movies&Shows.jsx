import { useEffect } from "react";
import Slider from "../../components/Slider";
import VideoCard from "../../components/VideoCard";
import MoviesHero from "./components/MoviesHero";
import MovieList from "../../components/MovieList";
import useFetchLists from "../../hooks/useFetchLists";
const tmdbBaseUrl = 'https://image.tmdb.org/t/p/original';

export default function MoviesAndShows() {
  


useFetchLists('/tv/popular')
/*


  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmU3ZmQ0YmFmMzYxNjA4MTA5ZTgxYjAzODRhMDlmMiIsIm5iZiI6MTcyNjY4MDkxMy4zODc5OTcsInN1YiI6IjY2NmE1ZWYxOTg2NjI3YmM1ZjA3ZjNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IB_DSwACwudGAzh3r0Jv6RkrpZXH1wlL53SauTQPHUQ'
      }
    };


    fetch("https://api.themoviedb.org/3/tv/latest", options)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // fetch()
  }, []);
  */

  return (
    <div>
      {/* featured trailer */}

      <section className=" bg-primary pt-20  px-2 md:px-10">
        <MoviesHero />
      </section>

      <section className=" bg-primary pt-20  px-2 md:px-10">
        



      <MovieList title={'first title'}>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </MovieList>


      <MovieList title={'second title'}>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
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

