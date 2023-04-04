import { Component } from '@angular/core';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';
import { User } from 'src/app/User';
import {AuthService} from '../../services/auth-service.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string="";
  password: string="";
  error: string="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesServiceService,
    private authService: AuthService
  ){}

  onSubmit(): void {
    this.coursesService.login(this.email, this.password).subscribe(
      (user: User) => {
        if (user) {
          this.coursesService.changeAuth();
          localStorage.setItem('isLoggedIn', 'true');
          this.authService.isLoggedIn= true;
          if(user.email == "admin@learnspot.com"){
            this.router.navigate(['/admin']);
          }else{
            this.router.navigate(['/']);
          }
        }
      },
      (error: any) => {
        this.error = error.error;
      }
    );
  }


}
