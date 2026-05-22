import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { MovieCard } from '../../shared/movie-card/movie-card';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}