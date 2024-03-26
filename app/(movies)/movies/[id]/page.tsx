import { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieVideo from './movie-video';
import MovieInfo from './movie-info';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback="Loading Info...">
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback="Loading Video...">
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
