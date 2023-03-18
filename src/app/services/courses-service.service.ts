import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../Cours';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private url : string = 'http://localhost:5000/courses'
  constructor(private http:HttpClient) { }

  getCourses(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.url);
  }

  
  getCourse(id: string): Observable<Cours> {
    return this.http.get<Cours>(this.url+"/"+id);
  }
}
