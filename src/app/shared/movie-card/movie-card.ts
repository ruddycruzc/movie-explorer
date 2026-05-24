import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() title = '';
  @Input() image = '';
  @Input() rating = 0;
  @Input() movieId = 0;
}