import { Component } from '@angular/core';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';
import {Cours} from '../../Cours';


@Component({
  selector: 'app-add-cours-form',
  templateUrl: './add-cours-form.component.html',
  styleUrls: ['./add-cours-form.component.css']
})
export class AddCoursFormComponent {
  course = {
    title: '',
    description:"",
    category: '',
    duration: null,
    author: '',
    chapters: [] as { title: string; content: string; }[]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesServiceService
  ) { }

  addChapter() {
    this.course.chapters.push({
      title: '',
      content: ''
    });
  }

  removeChapter(index: number) {
    this.course.chapters.splice(index, 1);
  }

  submitForm() {
    const newCourse: Cours = {
      title: this.course.title,
      category: this.course.category,
      duration: this.course.duration!,
      author: this.course.author,
      description: this.course.description,
      views: 0,
      chapters: this.course.chapters
    };
  
      this.coursesService.insertCourse(newCourse)
        .subscribe(() => {
          alert("The Course has been added !");
          this.router.navigate(['/admin'], { relativeTo: this.route });
      });
    
      
  }

  
}
