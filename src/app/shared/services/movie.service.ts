import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class MovieService {
  constructor(private http:HttpClient) { }
  getMovies():any{
    return this.http.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc",{params:{api_key:"4cb1eeab94f45affe2536f2c684a5c9e"}})
  }
}
