import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {HeaderComponent} from './component/header/header.component'
import {AllCoursesComponent} from './component/all-courses/all-courses.component'

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '/allcourses', component: AllCoursesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
