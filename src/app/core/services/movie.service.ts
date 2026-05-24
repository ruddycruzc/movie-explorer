import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { MovieResponse } from '../../interfaces/movie-response.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);

  private headers = new HttpHeaders({
    Authorization: `Bearer ${environment.apiToken}`
  });

  getPopularMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiUrl}/movie/popular?language=es-ES`,
      {
        headers: this.headers
      }
    );
  }
  getMovieById(id: number) {
  return this.http.get(
    `${environment.apiUrl}/movie/${id}?language=es-ES`,
    {
      headers: this.headers
    }
  );
}
}