import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { HtmlComponent } from './components/html/html.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { MainComponent } from './components/main/main.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"main",component:MainComponent},
  {path:"html",component:HtmlComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"angular",component:AngularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
