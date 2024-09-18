






// example search query
/*
const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmU3ZmQ0YmFmMzYxNjA4MTA5ZTgxYjAzODRhMDlmMiIsIm5iZiI6MTcyNjY4MDkxMy4zODc5OTcsInN1YiI6IjY2NmE1ZWYxOTg2NjI3YmM1ZjA3ZjNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IB_DSwACwudGAzh3r0Jv6RkrpZXH1wlL53SauTQPHUQ',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..." 
      />
      <button onClick={handleSearch}>Search</button>
      
      {error && <p>Error: {error}</p>}
      
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;
*/

// example response
/* {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/6aEbHtod2V6dr6mHpaSgPxJC1rA.jpg",
        "genre_ids": [
          28,
          18
        ],
        "id": 356626,
        "original_language": "fr",
        "original_title": "Black",
        "overview": "Mavela, 15 years old, is a Black Bronx. She falls madly in love with Marwan, an extremely charismatic member of a rival gang, the 1080s. The young couple is forced to make a brutal choice between gang loyalty and the love they have for one another. An impossible dilemma.",
        "popularity": 7.204,
        "poster_path": "/59iN2DBm5tzKsmI58xUgK3FtgRr.jpg",
        "release_date": "2015-11-11",
        "title": "Black",
        "video": false,
        "vote_average": 6.64,
        "vote_count": 136
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          18
        ],
        "id": 361912,
        "original_language": "en",
        "original_title": "Black",
        "overview": "Teenage Regan fears her anger will one day destroy her. While indulging in drugs and deceit she connects to the story of Phear, a sheltered bat-winged girl who believes she's destined to become evil. As people attempt to bring Regan under control, her anger threatens to consume her. So, too, is Phear's demise when she is kidnapped and everything she knows is destroyed. As both girls attempt to reclaim her freedom, each must face her rage and learn what it truly takes to become a monster.",
        "popularity": 0.608,
        "poster_path": "/pZvdPcikNC2WP8cpqmdZO5qSTTJ.jpg",
        "release_date": "2008-11-07",
        "title": "Black",
        "video": false,
        "vote_average": 0.0,
        "vote_count": 0
      }
    ],
    "total_pages": 265,
    "total_results": 5283
  } */