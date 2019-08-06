import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private movSrv:MovieService) { }
  movie={};
  isFav :boolean;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.movSrv.getMovieById(params.id).subscribe((movie)=>{
        this.movie = movie;
        this.isFav = this.movSrv.getFavoriteStatus(movie.id)
      })
    })
    
  }
  addToFavorites(movie){
    this.movSrv.saveAsFavorite(movie);
    this.isFav=true;
  }
  removeFromFavorites(id){
    this.movSrv.removeFromFavorites(id);
    this.isFav=false;
  }
}
