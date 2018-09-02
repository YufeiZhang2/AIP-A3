import { PostService } from "./services/post.service";
import { ComingSoonMoviesService } from "./services/coming-soon-movies.service";
import { NowShowingMoviesService } from "./services/now-showing-movies.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from "./routing.module";

import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { NowShowingMovieListComponent } from "./components/now-showing-movie-list/now-showing-movie-list.component";
import { ComingSoonMovieListComponent } from "./components/coming-soon-movie-list/coming-soon-movie-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { GenreComponent } from "./components/genre/genre.component";
import { HomeComponent } from "./components/home/home.component";
import { AwardComponent } from "./components/award/award.component";
import { CompanyInformationComponent } from "./components/company-information/company-information.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./components/add-movie-form/add-movie-form.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { EditMovieFormComponent } from "./components/edit-movie-form/edit-movie-form.component";
import { PostsComponent } from "./components/posts/posts.component";
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavigationBarComponent,
    NowShowingMovieListComponent,
    ComingSoonMovieListComponent,
    FooterComponent,
    HeaderComponent,
    GenreComponent,
    HomeComponent,
    AwardComponent,
    CompanyInformationComponent,
    AddMovieFormComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    EditMovieFormComponent,
    PostsComponent,
    MovieComponent
  ],
  imports: [BrowserModule, HttpModule, RoutingModule],
  providers: [PostService, NowShowingMoviesService, ComingSoonMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
