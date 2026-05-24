import { Movie } from './movie.interface';

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;

}
export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailResponse extends Movie {
  backdrop_path: string;
  genres: Genre[];
  runtime: number;
  tagline: string;
  budget: number;
}