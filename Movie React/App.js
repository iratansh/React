import './App.css';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'api_key=3cbba22657595060a385bd09cc64bc72';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = BASE_URL + 'trending/movie/week?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies(TRENDING_URL);
  }, []);

  const getColor = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(BASE_URL + 'search/movie?' + API_KEY + '&query=' + searchTerm);
    } else {
      getMovies(TRENDING_URL);
    }
  };

  return (
    <>
      <header>
        <form id="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Movie Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_input"
          />
        </form>
      </header>

      <main id="main">
        {movies.map((movie) => (
          <div key={movie.id} className="movies">
            <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span className={getColor(movie.vote_average)}>{movie.vote_average}</span>
            </div>
            <div className="overview">
              <h3>Movie Overview</h3>
              {movie.overview}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
