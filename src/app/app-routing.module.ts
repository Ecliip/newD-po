import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { CreateTestComponent } from './pages/create-test/create-test.component';
import { ProjectComponent } from './pages/create-test/project/project.component';
import { QuestionsComponent } from './pages/create-test/questions/questions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateTestComponent, children: [
      {path: '', component: ProjectComponent},
      {path: 'questions', component: QuestionsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
