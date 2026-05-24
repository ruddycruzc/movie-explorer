import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common'; // Solución al error NG8004
import { MovieService } from '../../core/services/movie.service';
import { MovieDetailResponse } from '../../interfaces/movie.interface';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [Navbar, Footer, RouterLink, DecimalPipe], 
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);

  public movie = signal<MovieDetailResponse | null>(null);
  public isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe({
        next: (data) => {
          this.movie.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al obtener el detalle de la película:', err);
          this.isLoading.set(false);
        }
      });
    }
  }
}