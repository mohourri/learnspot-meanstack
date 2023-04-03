import { Component, OnInit } from '@angular/core';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  appTitle : string = "LearnSpot";
  constructor(private coursesService: CoursesServiceService,
    private route: ActivatedRoute,
    private router: Router,){}
  ngOnInit():void{
  }

  logout() {
    console.log("Logged out")
    this.coursesService.logout();
    this.router.navigate(['/login']);
  }
  
  get isLoggedIn(): boolean {
    return this.coursesService.isLoggedIn;
  }


}
