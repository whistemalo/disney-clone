import MovieCarousel from "@/components/MovieCarousel";
import { Button } from "@/components/ui/button";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/api/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
  
      <MovieCarousel movies={upcomingMovies} title="Upcoming Movies"/>
      <MovieCarousel movies={topRatedMovies} title="Top Rated Movies" />
      <MovieCarousel movies={popularMovies} title="Popular Movies" />
    </main>
  );
}
