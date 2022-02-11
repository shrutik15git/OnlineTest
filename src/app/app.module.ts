import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AngularComponent } from './components/angular/angular.component';
import { HeaderComponent } from './components/header/header.component';
import { HtmlComponent } from './components/html/html.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { MainComponent } from './components/main/main.component';
import { QuestionComponent } from './components/question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    MainComponent,
    HtmlComponent,
    JavascriptComponent,
    AngularComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
    
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
