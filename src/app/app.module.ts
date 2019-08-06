import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieCardComponent } from './movies/movies-list/movie-card/movie-card.component';
import { MovieService } from './shared/services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { MoviesComponent } from './pages/movies/movies.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as altHeart } from '@fortawesome/free-regular-svg-icons';
import { ErrorComponent } from './pages/error/error.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    MoviesListComponent,
    MovieCardComponent,
    TrimPipe,
    MoviesComponent,
    MovieDetailsComponent,
    SearchResultsComponent,
    FavoritesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    FormsModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 40,
      outerStrokeWidth: 6,
      innerStrokeWidth: 3,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      renderOnClick:false,
      animation:false,
      startFromZero:false,
      showZeroOuterStroke:false,
      lazy:false,
      subtitle:'rating'
    })
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(faHeart,altHeart)
  }
}
