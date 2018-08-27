import { PostService } from './services/post.service';
import { ComingSoonMoviesService } from "./services/coming-soon-movies.service";
import { NowShowingMoviesService } from "./services/now-showing-movies.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from './routing.module';

import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { NowShowingBlockComponent } from "./now-showing-block/now-showing-block.component";
import { ComingSoonBlockComponent } from "./coming-soon-block/coming-soon-block.component";
import { NowShowingMovieListComponent } from "./now-showing-movie-list/now-showing-movie-list.component";
import { ComingSoonMovieListComponent } from "./coming-soon-movie-list/coming-soon-movie-list.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { GenreComponent } from "./genre/genre.component";
import { HomeComponent } from "./home/home.component";
import { AwardComponent } from "./award/award.component";
import { CompanyInformationComponent } from "./company-information/company-information.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { EditMovieFormComponent } from "./edit-movie-form/edit-movie-form.component";
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavigationBarComponent,
    NowShowingBlockComponent,
    ComingSoonBlockComponent,
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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [PostService, NowShowingMoviesService, ComingSoonMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
