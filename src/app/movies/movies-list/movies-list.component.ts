import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '../../shared/interfaces/pagination';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies;
  @Input() pagination:Pagination;
  constructor(private route:Router) { }

  ngOnInit() {
    
  }
  //navigate to the selected page
  onPageChange(p){
    this.route.navigate(['movies',p])
  }
}
