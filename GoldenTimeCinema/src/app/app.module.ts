import { ComingSoonMoviesService } from "./coming-soon-movies.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { NowShowingBlockComponent } from "./now-showing-block/now-showing-block.component";
import { ComingSoonBlockComponent } from "./coming-soon-block/coming-soon-block.component";
import { NowShowingMovieListComponent } from "./now-showing-movie-list/now-showing-movie-list.component";
import { NowShowingMoviesService } from "./now-showing-movies.service";
import { ComingSoonMovieListComponent } from "./coming-soon-movie-list/coming-soon-movie-list.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { GenreComponent } from "./genre/genre.component";
import { HomeComponent } from "./home/home.component";
import { AwardComponent } from "./award/award.component";
import { CompanyInformationComponent } from "./company-information/company-information.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";

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
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
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
        path: "**",
        component: NotFoundPageComponent
      }
    ])
  ],
  providers: [NowShowingMoviesService, ComingSoonMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
