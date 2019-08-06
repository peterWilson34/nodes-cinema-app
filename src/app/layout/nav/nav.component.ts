import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSearchSubmit(form){
    let query = form.value.query;
    if(query){
      this.router.navigate(['search'],{ queryParams: { query: query }})
    }
  }
}
