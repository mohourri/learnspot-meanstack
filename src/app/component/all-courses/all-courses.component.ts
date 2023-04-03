import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from 'src/app/services/courses-service.service';
import {Cours} from '../../Cours';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})

export class AllCoursesComponent implements OnInit {
  courses : Cours[] = [];
  isAdmin :boolean =true;
  constructor(private route: ActivatedRoute,private coursService: CoursesServiceService, private router: Router){}
  ngOnInit():void{
    if(this.coursService.isLoggedIn){
      this.coursService.getCourses().subscribe((crss)=>(this.courses = crss));

    }else{
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }

}
