import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenreComponent } from "./components/genre/genre.component";
import { HomeComponent } from "./components/home/home.component";
import { AwardComponent } from "./components/award/award.component";
import { CompanyInformationComponent } from "./components/company-information/company-information.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./components/add-movie-form/add-movie-form.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { EditMovieFormComponent } from "./components/edit-movie-form/edit-movie-form.component";

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
    path: "award",
    component: AwardComponent
  },
  {
    path: "companyInformation",
    component: CompanyInformationComponent
  },
  {
    path: "addMovieForm",
    component: AddMovieFormComponent
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
    path: "editMovieForm",
    component: EditMovieFormComponent
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
