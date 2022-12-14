import { MovieCard } from "./MovieCard"

interface ContentProps {
  selectedGenre: string;
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
}

export function Content({ selectedGenre, movies }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">Categoria: <span>{selectedGenre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}