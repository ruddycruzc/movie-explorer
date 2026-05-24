import { Component, OnInit, inject, signal } from '@angular/core';

import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { MovieCard } from '../../shared/movie-card/movie-card';

import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer,
    MovieCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  private readonly movieService = inject(MovieService);

  public movies = signal<Movie[]>([]);
public isLoading = signal<boolean>(true);

ngOnInit(): void {
    this.loadPopularMovies();
  }

  private loadPopularMovies(): void {
this.isLoading.set(true);

    this.movieService.getPopularMovies().subscribe({
      next: (response) => {
        this.movies.set(response.results);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar películas en Home:', err);
        this.isLoading.set(false);
      }
    });
  }
}