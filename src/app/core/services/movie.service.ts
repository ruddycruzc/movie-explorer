import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieDetailResponse, MovieResponse } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly http = inject(HttpClient);
  private readonly headers = new HttpHeaders({
    Authorization: `Bearer ${environment.apiToken}`
  });

  getPopularMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiUrl}/movie/popular?language=es-ES`,
      { headers: this.headers }
    );
  }

  getMovieById(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(
      `${environment.apiUrl}/movie/${id}?language=es-ES`,
      { headers: this.headers }
    );
  }
}