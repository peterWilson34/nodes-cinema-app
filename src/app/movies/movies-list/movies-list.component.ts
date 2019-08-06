import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies;
  @Input() pagination:{};
  constructor(private route:Router) { }

  ngOnInit() {
    console.log(this.pagination);
    
  }
  onPageChange(t){
    console.log(t);
    this.route.navigate(['movies',t])
  }
}
