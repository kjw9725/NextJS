import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideo from '../../../../components/movie-video';

interface IdType {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IdType) => {
  const movieTitle = await getMovie(id);
  return {
    title: movieTitle.title,
  };
};

export default async function MovieDetail({ params: { id } }: IdType) {
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
