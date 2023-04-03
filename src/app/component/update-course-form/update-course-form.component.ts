import { Component } from '@angular/core';
import { Cours } from '../../Cours';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';


@Component({
  selector: 'app-update-course-form',
  templateUrl: './update-course-form.component.html',
  styleUrls: ['./update-course-form.component.css']
})
export class UpdateCourseFormComponent {

  course!: Cours;
  courseId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesServiceService
  ) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.getCourse(this.courseId);
  }

  getCourse(id: string): void {
    this.coursesService.getCourse(id)
      .subscribe(course => {
        this.course = course
        console.log("This is our course: ")
        console.log(course)
      });
  }

  updateCourse(): void {
    if(this.course.title =="" || this.course.author =="" || this.course.category =="" || this.course.duration == 0){
      return alert("Please fill all the stared fields before submitting :)");
    }else{
      this.coursesService.updateCourse(this.course)
        .subscribe(() =>{ this.router.navigate(['/admin'], { relativeTo: this.route });
        alert(this.course.title+" has been updated !");
      });

    }
  }

  cancel(): void {
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }

  
  removeChapter(index: number): void {
    this.course.chapters.splice(index, 1);
  }
  
  addChapter(): void {
    this.course.chapters.push({title: '', content: ''});
  }
}
