import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http:HttpClient) { }
  baseAPIUrl = "https://api.themoviedb.org/3/"; //set the base URL for the API

  // call the API to get the most popular movies and are now playing
  getMostPopularMovies():any{
    return this.http.get(this.baseAPIUrl+"movie/now_playing?sort_by=popularity.desc",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e"}})
  }

  // call the API to get the movies by selected page
  getMoviesbyPage(page):any{
    return this.http.get(this.baseAPIUrl+"movie/now_playing?sort_by=popularity.desc",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e",page:page}})
  }

  // call the API to get the movie by selected id
  getMovieById(id):any{
    return this.http.get(this.baseAPIUrl+"movie/"+id,{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e"}})
  }

  // call the API to get the movies by selected name
  getMovieByName(name):any{
    return this.http.get(this.baseAPIUrl+"search/movie",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e",query:name}})

  }

  // save movie into localStorage
  saveAsFavorite(movie){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'))  ||[];
    favMovs.push(movie);
    localStorage.setItem('favMovs',JSON.stringify(favMovs))    
  }

  //remove the movie with the selected id from the saved favorite list.
  removeFromFavorites(id){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'));
    for (let i = 0; i < favMovs.length; i++) {
      if(favMovs[i].id == id){
        favMovs.splice(i,1)
      }
      
    }
    localStorage.setItem('favMovs',JSON.stringify(favMovs))  
  }

  //get the status of a movie with the selected id
  getFavoriteStatus(id){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'))||[];//set default to empty
    let bool= false;
    for (let i = 0; i < favMovs.length; i++) {
      if(favMovs[i].id == id){
        bool = true;
      }
      
    }
    return bool;

  }

  //get the list of favorite movies from localstorage
  getFavoriteMovies(){
    return  JSON.parse(localStorage.getItem('favMovs')) ||[];//set default to empty
  }
}
