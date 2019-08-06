import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieSrv:MovieService,private router:Router) { }
  popularMovies:[];
  ngOnInit() {
    //get first 6 movies from the most popular items
    this.movieSrv.getMostPopularMovies().subscribe((res)=>{
      this.popularMovies = res.results.slice(0,6)      
    },((err)=>{
      this.router.navigate(['/error/',err.status,err.statusText]) //error handling
    }))
  }

}
