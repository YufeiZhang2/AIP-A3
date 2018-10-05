import { Component } from "@angular/core";
// Built-in imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Component imports
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { NowShowingMovieListComponent } from "./components/now-showing-movie-list/now-showing-movie-list.component";
import { ComingSoonMovieListComponent } from "./components/coming-soon-movie-list/coming-soon-movie-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { GenreComponent } from "./components/genre/genre.component";
import { HomeComponent } from "./components/home/home.component";
import { CompanyInformationComponent } from "./components/company-information/company-information.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./components/add-movie-form/add-movie-form.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { EditMovieFormComponent } from "./components/edit-movie-form/edit-movie-form.component";
import { MovieComponent } from "./components/movie/movie.component";
import { AuthenticationComponent } from "./components/auth/authentication.component";
import { LogoutComponent } from "./components/auth/logout.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MessageComponent } from "./components/message/message.component";
import { BookMoviesComponent } from "./components/book-movies/book-movies.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

// Service imports
import { AuthenticationService } from "./services/authentication.service";
import { MoviesService } from "./services/movies.service";
import { BookMovieService } from "./services/book-movie.service";

// Route imports
import { RoutingModule } from "./app.routing";

// Other imports
import { AuthGuard } from "./components/auth/auth.guard";
import { AuthInterceptor } from "./components/auth/auth.interceptor";
import { MyDatePickerModule } from "mydatepicker";

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
    CompanyInformationComponent,
    AddMovieFormComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    EditMovieFormComponent,
    MovieComponent,
    AuthenticationComponent,
    LogoutComponent,
    UserProfileComponent,
    AdminComponent,
    MessageComponent,
    BookMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MyDatePickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationService,
    AuthGuard,
    MoviesService,
    BookMovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
