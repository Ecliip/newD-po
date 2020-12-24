import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateTestComponent } from './pages/create-test/create-test.component';
import { ProjectComponent } from './pages/create-test/project/project.component';
import { QuestionsComponent } from './pages/create-test/questions/questions.component';
import { FinalScreenComponent } from './pages/create-test/final-screen/final-screen.component';
import { PreviewComponent } from './pages/create-test/preview/preview.component';
import { PublicComponent } from './pages/create-test/public/public.component';
import { ExitComponent } from './pages/create-test/exit/exit.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileHomeComponent } from './pages/profile/profile-home/profile-home.component';
import { ProfileTestsComponent } from './pages/profile/profile-tests/profile-tests.component';
import { ProfileCommentsComponent } from './pages/profile/profile-comments/profile-comments.component';
import { ProfileRecordsComponent } from './pages/profile/profile-records/profile-records.component';
import { ProfileStatisticsComponent } from './pages/profile/profile-statistics/profile-statistics.component';
import { ProfileFriendsComponent } from './pages/profile/profile-friends/profile-friends.component';
import { ProfileMessagesComponent } from './pages/profile/profile-messages/profile-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateTestComponent,
    ProjectComponent,
    QuestionsComponent,
    FinalScreenComponent,
    PreviewComponent,
    PublicComponent,
    ExitComponent,
    ProfileComponent,
    ProfileHomeComponent,
    ProfileTestsComponent,
    ProfileCommentsComponent,
    ProfileRecordsComponent,
    ProfileStatisticsComponent,
    ProfileFriendsComponent,
    ProfileMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
