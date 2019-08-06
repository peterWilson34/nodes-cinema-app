import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http:HttpClient) { }
  getMostPopularMovies():any{
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?sort_by=popularity.desc",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e"}})
  }
  getMoviesbyPage(page):any{
    return this.http.get("https://api.themoviedb.org/3/movie/now_playing?sort_by=popularity.desc",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e",page:page}})
  }
  getMovieById(id):any{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id,{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e"}})
  }
  getMovieByName(name):any{
    return this.http.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e",query:name}})

  }
  saveAsFavorite(movie){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'))  ||[];
    favMovs.push(movie);
    localStorage.setItem('favMovs',JSON.stringify(favMovs))    
  }
  removeFromFavorites(id){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'));
    for (let i = 0; i < favMovs.length; i++) {
      if(favMovs[i].id == id){
        favMovs.splice(i,1)
      }
      
    }
    localStorage.setItem('favMovs',JSON.stringify(favMovs))  
  }
  getFavoriteStatus(id){
    let favMovs = JSON.parse(localStorage.getItem('favMovs'));
    let bool= false;
    for (let i = 0; i < favMovs.length; i++) {
      if(favMovs[i].id == id){
        bool = true;
      }
      
    }
    return bool;

  }
  getFavoriteMovies(){
    return  JSON.parse(localStorage.getItem('favMovs'))  ||[];
  }
}
