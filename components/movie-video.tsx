import { API_URL } from '../app/constant';
import styles from '../styles/movie-video.module.css';

const getVideo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);

  return response.json();
};

export default async function MovieVideo({ id }: { id: string }) {
  const movieVideo = await getVideo(id);
  return (
    <div className={styles.container}>
      {movieVideo.map((video) => {
        return (
          <iframe
            key={video.key}
            src={`https://www.youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      })}
    </div>
  );
}
