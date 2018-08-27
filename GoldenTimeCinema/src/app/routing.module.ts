import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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