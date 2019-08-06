import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private movSrv:MovieService,private router:Router) { }
  movie={};
  isFav :boolean;
  ngOnInit() {
    //listen to change in movie id
    this.activatedRoute.params.subscribe((params)=>{
      //get movie by the selected id
      this.movSrv.getMovieById(params.id).subscribe((movie)=>{
        this.movie = movie;
        this.isFav = this.movSrv.getFavoriteStatus(movie.id) // check if the current movie was added as a favorite.
      },((err)=>{
        this.router.navigate(['/error/',err.status,err.statusText]) //error handling
      }))
    })
    
  }
  //add movie to the favorite list
  addToFavorites(movie){
    this.movSrv.saveAsFavorite(movie);
    this.isFav=true; //toggle favorite status to hide
  }
  //remove movie to the favorite list
  removeFromFavorites(id){
    this.movSrv.removeFromFavorites(id);
    this.isFav=false;//toggle favorite status to hide
  }
}
