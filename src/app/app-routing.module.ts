import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',children:[
    {path:'',component:MoviesComponent},
    {path:':page',component:MoviesComponent}
  ]},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'search',component:SearchResultsComponent},
  {path:'favorites',component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
