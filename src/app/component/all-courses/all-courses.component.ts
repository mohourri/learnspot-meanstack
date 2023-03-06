import { Component } from '@angular/core';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import {Cours} from '../../Cours';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent {
  courses : Cours[] = []
  constructor(private coursService: CoursesServiceService){}
  ngOnInit():void{
    this.coursService.getCourses().subscribe(crs=>{
      this.courses = crs;
    });
  }
}
