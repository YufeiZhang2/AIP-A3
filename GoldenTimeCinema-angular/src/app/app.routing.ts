import { BookMoviesComponent } from "./components/book-movies/book-movies.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MessageComponent } from "./components/message/message.component";
import { AdminComponent } from "./components/admin/admin.component";
import { MovieComponent } from "./components/movie/movie.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenreComponent } from "./components/genre/genre.component";
import { HomeComponent } from "./components/home/home.component";
import { CompanyInformationComponent } from "./components/company-information/company-information.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./components/add-movie-form/add-movie-form.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { TicketComponent } from "./components/ticket/ticket.component";
import { AuthGuard } from "./components/auth/auth.guard";
import { AdminGuard } from "./components/auth/admin.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "genre",
    component: GenreComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    data: { isAdmin: true }
  },
  {
    path: "companyInformation",
    component: CompanyInformationComponent
  },
  {
    path: "addMovieForm",
    component: AddMovieFormComponent,
    canActivate: [AuthGuard, AdminGuard],
    data: { isAdmin: true }
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "userprofile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editprofile",
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tickets",
    component: TicketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "movie/:_id",
    component: MovieComponent
  },
  {
    path: "message",
    component: MessageComponent
  },
  {
    path: "search",
    component: SearchBarComponent
  },
  {
    path: "movie/:showtime/:_id",
    component: BookMoviesComponent
  },
  {
    path: "genre/:showtime/:_id",
    component: BookMoviesComponent
  },
  {
    path: "search/:showtime/:_id",
    component: BookMoviesComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
