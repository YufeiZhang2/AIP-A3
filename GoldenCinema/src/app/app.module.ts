import { ComingSoonMoviesService } from "./coming-soon-movies.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { NowShowingBlockComponent } from "./now-showing-block/now-showing-block.component";
import { ComingSoonBlockComponent } from "./coming-soon-block/coming-soon-block.component";
import { NowShowingMovieListComponent } from "./now-showing-movie-list/now-showing-movie-list.component";
import { NowShowingMoviesService } from "./now-showing-movies.service";
import { ComingSoonMovieListComponent } from "./coming-soon-movie-list/coming-soon-movie-list.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavigationBarComponent,
    NowShowingBlockComponent,
    ComingSoonBlockComponent,
    NowShowingMovieListComponent,
    ComingSoonMovieListComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  providers: [NowShowingMoviesService, ComingSoonMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
