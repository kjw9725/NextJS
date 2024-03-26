import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-video';

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
