import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import {Cours} from "../../Cours";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent implements OnInit {
  course!: Cours;

  constructor(private route: ActivatedRoute, private courseService: CoursesServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id!).subscribe((cours) => {
      this.course = cours;
    });
  }
}
