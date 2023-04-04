import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { HeaderComponent } from './component/header/header.component';
import { CoursCardComponent } from './component/cours-card/cours-card.component';
import { ButtonComponent } from './component/button/button.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { SelectedCourseComponent } from './component/selected-course/selected-course.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AddCoursFormComponent } from './component/add-cours-form/add-cours-form.component';
import { UpdateCourseFormComponent } from './component/update-course-form/update-course-form.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';

const appRoutes: Routes =[
  {path:'',component: AllCoursesComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: SelectedCourseComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'courses/new_course', component: AddCoursFormComponent },
  { path: 'course/update/:id', component: UpdateCourseFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component:  ContactComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCoursesComponent,
    CoursCardComponent,
    ButtonComponent,
    LoginFormComponent,
    SelectedCourseComponent,
    AdminDashboardComponent,
    AddCoursFormComponent,
    UpdateCourseFormComponent,
    SpinnerComponent,
    LoginFormComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
