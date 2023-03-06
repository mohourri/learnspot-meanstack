import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { HeaderComponent } from './component/header/header.component';
import { CoursCardComponent } from './component/cours-card/cours-card.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllCoursesComponent,
    CoursCardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
