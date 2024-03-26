import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return <h1>{movie.title}</h1>;
}
