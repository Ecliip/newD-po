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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
