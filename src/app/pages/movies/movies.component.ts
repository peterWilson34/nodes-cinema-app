import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private movieSrv:MovieService,private activateRoute:ActivatedRoute) { }
  popularMovies:[];
  pagination:{};
  ngOnInit() {
    this.movieSrv.getMostPopularMovies().subscribe((res)=>{
      this.popularMovies = res.results
      this.pagination = {page:res.page,pageSize:res.results.length,collectionSize:res.total_results};     
    })
    this.activateRoute.params.subscribe((params)=>{
      let page = params.page;
      this.movieSrv.getMoviesbyPage(page).subscribe((res)=>{
        this.popularMovies = res.results
        this.pagination = {page:res.page,pageSize:res.results.length,collectionSize:res.total_results};
      })
      
    })
  }

}
