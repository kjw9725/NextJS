import Link from 'next/link';
import homerStyles from '../../styles/home.module.css';
import Movie from '../../components/movie';
export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default async function HomePage({
  params: { id },
}: {
  params: { id: string };
}) {
  //   const [isLoading, setLoading] = useState(true);
  const movies = await getMovies();

  return (
    <div className={homerStyles.container}>
      {movies.map((movie) => {
        return (
          <Movie id={movie.id} poster={movie.poster_path} title={movie.title} />
        );
      })}
    </div>
  );
}
