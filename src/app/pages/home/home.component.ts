import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieSrv:MovieService) { }
  popularMovies:[];
  ngOnInit() {
    this.movieSrv.getMostPopularMovies().subscribe((res)=>{
      this.popularMovies = res.results.slice(0,6)      
    })
  }

}
