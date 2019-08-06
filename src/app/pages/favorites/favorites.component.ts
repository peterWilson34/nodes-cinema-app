import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private mvSrv:MovieService) { }
  movies:[];
  ngOnInit() {
    this.movies= this.mvSrv.getFavoriteMovies();
  }

}
