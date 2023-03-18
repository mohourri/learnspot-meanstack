import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { HeaderComponent } from './component/header/header.component';
import { CoursCardComponent } from './component/cours-card/cours-card.component';
import { ButtonComponent } from './component/button/button.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { AddCoursFormComponent } from './component/add-cours-form/add-cours-form.component';
import { SelectedCourseComponent } from './component/selected-course/selected-course.component';

const appRoutes: Routes =[
  {path:'',component: AllCoursesComponent},
  { path: 'course/:id', component: SelectedCourseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCoursesComponent,
    CoursCardComponent,
    ButtonComponent,
    LoginFormComponent,
    AddCoursFormComponent,
    SelectedCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
