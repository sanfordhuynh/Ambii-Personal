import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ProfileComponent } from './profile/profile.component';
import { UpvotedSongComponent } from './upvoted-song/upvoted-song.component';
import { AddedSongComponent } from './added-song/added-song.component';
import { EmotionComponent } from './emotion/emotion.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TitleComponent } from './title/title.component';
import { RecommendationTitleComponent } from './recommendation-title/recommendation-title.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroductionParentComponent } from './introduction-parent/introduction-parent.component';
import { ConnectionParentComponent } from './connection-parent/connection-parent.component';
import { ConnectionHeaderComponent } from './connection-header/connection-header.component';
import { ConnectionBodyComponent } from './connection-body/connection-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ProfileComponent,
    UpvotedSongComponent,
    AddedSongComponent,
    EmotionComponent,
    RecommendedComponent,
    TitleComponent,
    RecommendationTitleComponent,
    TopBarComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    IntroductionParentComponent,
    ConnectionParentComponent,
    ConnectionHeaderComponent,
    ConnectionBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
