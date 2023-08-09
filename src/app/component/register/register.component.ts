import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  CoursesServiceService} from '../../services/courses-service.service';
import { ActivatedRoute,Router  } from '@angular/router';
import { User } from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesServiceService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.user = this.userForm.value;
    this.coursesService.addUser(this.user)
        .subscribe(() => {
          alert("The User has been added successfully !");
          this.router.navigate(['/'], { relativeTo: this.route });
      });
  }
}
