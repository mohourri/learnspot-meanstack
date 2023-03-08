import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { HeaderComponent } from './component/header/header.component';
import { CoursCardComponent } from './component/cours-card/cours-card.component';
import { ButtonComponent } from './component/button/button.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { AddCoursFormComponent } from './component/add-cours-form/add-cours-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCoursesComponent,
    CoursCardComponent,
    ButtonComponent,
    LoginFormComponent,
    AddCoursFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
