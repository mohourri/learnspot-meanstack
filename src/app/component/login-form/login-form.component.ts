import { Component } from '@angular/core';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string="";
  password: string="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesServiceService
  ){}

  onSubmit():void{
    console.log(this.email);
    console.log(this.password);

  }


}
