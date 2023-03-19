import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cours } from '../../Cours';
import { CoursesServiceService } from '../../services/courses-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  courses!: Cours[];

  constructor(private courseService: CoursesServiceService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }
  
  editCourse(course: Cours): void {
    this.router.navigate(['/course/update/'+course.id]);
  }


  deleteCourse(crs: Cours): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(crs.id!).subscribe(() => {
        this.courses = this.courses.filter(course => course.id !== crs.id);
      });
    }
  }

  onCourseClick(course:Cours):void{
    this.router.navigate(['/course/'+course.id]);
  }
  newCourseClick():void{
    this.router.navigate(['/courses/new_course']);
  }


}
