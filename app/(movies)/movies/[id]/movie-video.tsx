import { API_URL } from '../../../(home)/page';

const getVideo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);

  return response.json();
};

export default async function MovieVideo({ id }: { id: string }) {
  const movieVideo = await getVideo(id);
  return <h1>{JSON.stringify(movieVideo)}</h1>;
}
