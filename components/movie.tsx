'use client';
import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';
interface movieType {
  id: string;
  poster: string;
  title: string;
}
export default function Movie({ id, poster, title }: movieType) {
  const router = useRouter();

  const goDetail = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <li key={id} className={styles.movie}>
      <img src={poster} alt="poster" onClick={goDetail} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
}
