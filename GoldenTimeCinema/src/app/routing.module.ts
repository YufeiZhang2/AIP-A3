import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreComponent } from "./genre/genre.component";
import { HomeComponent } from "./home/home.component";
import { AwardComponent } from "./award/award.component";
import { CompanyInformationComponent } from "./company-information/company-information.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { EditMovieFormComponent } from "./edit-movie-form/edit-movie-form.component";

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
    exports: [
        RouterModule
    ]
})
export class RoutingModule { };