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
  private url : string = 'http://localhost:5000/courses'
  private url2 : string = 'http://localhost:5000/users'
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
    const loginUrl = 'http://localhost:5000/login';
     var x= this.http.post<User>(loginUrl, { email, password });
    return x;
  }
  
  logout():void {
    localStorage.setItem('isLoggedIn', 'false');
  }
  getCourse(_id: string): Observable<Cours> {
    return this.http.get<Cours>(this.url+"/"+_id);
  }

  increaseViews(_id: string):Observable<any>{
    return this.http.put(this.url+"/course/increase_views/"+_id, _id);
  }
  
  updateCourse(course: Cours): Observable<any> {
    return this.http.put(this.url+"/"+course._id, course);
  }

  insertCourse(course: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.url, course);
  }



  deleteCourse(_id: string): Observable<Cours> {
    const url = `${this.url}/${_id}`;
    return this.http.delete<Cours>(url);
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url2, user);
  }


}
