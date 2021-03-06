import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isMenuOpened = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  //get the search query and pass it to the search result page
  onSearchSubmit(form: NgForm){
    let query = form.value.query;
    form.reset(); //reset the form before navgiate
    if(query){ //check if the query has value
      this.router.navigate(['search'],{ queryParams: { query: query }})
    }
  }
  //toggle the nav menu on mobile device instead of add jQuery.
  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }
}
