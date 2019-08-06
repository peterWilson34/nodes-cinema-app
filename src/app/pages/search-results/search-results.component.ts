import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private movSrv:MovieService,private activatedRoute:ActivatedRoute) { }
  query;
  results:any[];
  pagination:{};
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams)=>{
      let q = queryParams.query;
      this.query = q;
      this.movSrv.getMovieByName(q).subscribe((res)=>{
        this.results = res.results
        this.pagination = {page:res.page,pageSize:res.results.length,collectionSize:res.total_results};
          
      })
    })
  }

}
