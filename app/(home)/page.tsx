import Link from 'next/link';
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
    <div>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </div>
  );
}
