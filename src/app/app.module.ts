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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    MoviesListComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
