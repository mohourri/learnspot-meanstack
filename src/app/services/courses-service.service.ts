import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../Cours';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private url : string = 'http://localhost:5000/courses'
  private url2 : string = 'http://localhost:5000/users'
  constructor(private http:HttpClient) { }

  getCourses(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.url);
  }

  
  getCourse(id: string): Observable<Cours> {
    return this.http.get<Cours>(this.url+"/"+id);
  }

  
  updateCourse(course: Cours): Observable<any> {
    return this.http.put(this.url+"/"+course.id, course);
  }

  insertCourse(course: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.url, course);
  }



  deleteCourse(id: number): Observable<Cours> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Cours>(url);
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url2, user);
  }


}
