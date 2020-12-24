import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { CreateTestComponent } from './pages/create-test/create-test.component';
import { ProjectComponent } from './pages/create-test/project/project.component';
import { QuestionsComponent } from './pages/create-test/questions/questions.component';
import { FinalScreenComponent } from './pages/create-test/final-screen/final-screen.component';
import { PreviewComponent } from './pages/create-test/preview/preview.component';
import { PublicComponent } from './pages/create-test/public/public.component';
import { ExitComponent } from './pages/create-test/exit/exit.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ProfileHomeComponent} from './pages/profile/profile-home/profile-home.component';
import {ProfileTestsComponent} from './pages/profile/profile-tests/profile-tests.component';
import {ProfileCommentsComponent} from './pages/profile/profile-comments/profile-comments.component';
import {ProfileRecordsComponent} from './pages/profile/profile-records/profile-records.component';
import {ProfileStatisticsComponent} from './pages/profile/profile-statistics/profile-statistics.component';
import {ProfileFriendsComponent} from './pages/profile/profile-friends/profile-friends.component';
import {ProfileMessagesComponent} from './pages/profile/profile-messages/profile-messages.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateTestComponent, children: [
      {path: '', component: ProjectComponent},
      {path: 'questions', component: QuestionsComponent},
      {path: 'final', component: FinalScreenComponent},
      {path: 'preview', component: PreviewComponent},
      {path: 'publish', component: PublicComponent},
      {path: 'exit', component: ExitComponent},
    ]},
  {path: 'profile', component: ProfileComponent, children: [
      {path: '', component: ProfileHomeComponent},
      {path: 'tests', component: ProfileTestsComponent},
      {path: 'comments', component: ProfileCommentsComponent},
      {path: 'records', component: ProfileRecordsComponent},
      {path: 'statistics', component: ProfileStatisticsComponent},
      {path: 'friends', component: ProfileFriendsComponent},
      {path: 'messages', component: ProfileMessagesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
