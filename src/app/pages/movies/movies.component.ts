import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private movieSrv:MovieService,private activateRoute:ActivatedRoute, private router:Router) { }
  popularMovies:[];
  pagination:{};
  ngOnInit() {
    
    // listen to change in page number
    this.activateRoute.params.subscribe((params)=>{
      let page = params.page;
      // get movies in selected page
      this.movieSrv.getMoviesbyPage(page).subscribe((res)=>{
        this.popularMovies = res.results
        this.pagination = {page:res.page,pageSize:res.results.length,collectionSize:res.total_results}; //set pagingation config
      },((err)=>{
        this.router.navigate(['/error/',err.status,err.statusText]) //error handling
      }))
      
    })
  }

}
