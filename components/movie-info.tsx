import { API_URL } from '../app/constant';
import styles from '../styles/movie-info.module.css';

export const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt="poster" className={styles.poster} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h6>★ {movie.vote_average.toFixed(1)}</h6>
        <h4 className={styles.info}>{movie.overview}</h4>
      </div>
    </div>
  );
}
