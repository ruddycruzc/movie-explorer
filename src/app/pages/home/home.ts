import { Component, OnInit, inject } from '@angular/core';

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

  private movieService = inject(MovieService);

  movies: Movie[] = [];

  ngOnInit(): void {

    this.movieService
      .getPopularMovies()
      .subscribe(response => {

        this.movies = response.results;

        console.log(this.movies);

      });
  }
}