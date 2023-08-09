import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../Cours';
import { User } from '../User';
import {AuthService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private url : string = 'http://localhost:8088/courses'
  private url2 : string = 'http://localhost:8088/users'
  constructor(private http:HttpClient, private authService: AuthService) { }

  getCourses(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.url);
  }

  public changeAuth(): void {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;

  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }


  login(email: string, password: string): Observable<User> {
    const loginUrl = 'http://localhost:8088/login';
     var x= this.http.post<User>(loginUrl, { "email":email, "password":password });
    return x;
  }
  
  logout():void {
    localStorage.setItem('isLoggedIn', 'false');
  }
  getCourse(id_course: number): Observable<Cours> {
    return this.http.get<Cours>(this.url+"/"+id_course);
  }

  increaseViews(id_course: number):Observable<any>{
    return this.http.put("http://localhost:8088/course/"+id_course, id_course);
  }
  
  updateCourse(course: Cours): Observable<any> {
    return this.http.put(this.url+"/"+course.id_course, course);
  }

  insertCourse(course: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.url, course);
  }



  deleteCourse(id_course: number): Observable<Cours> {
    const url = `${this.url}/${id_course}`;
    return this.http.delete<Cours>(url);
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url2, user);
  }


}
