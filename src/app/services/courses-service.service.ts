import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cours } from '../Cours';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  courses :Cours[]=[{
    "id":1, 
    "title":"Java for beginners",
    "category":"Software engineering",
    "duration":10,
    "author":"Hourri Mohamed",
    "chapters":4
},
{
    "id":2, 
    "title":"Java Advanced",
    "category":"Software engineering",
    "duration":20 ,
    "author":"Qassi Mohamed",
    "chapters":3
},
{
    "id":3, 
    "title":"OOP in C#",
    "category":"Software engineering",
    "duration":40 ,
    "author":"Khalqi Adil",
    "chapters":6
},
{
    "id":4, 
    "title":"Machine Learning and neural networks",
    "category":"Software engineering",
    "duration":40,
    "author":"Hajji Tariq",
    "chapters":5
},
{
    "id":5, 
    "title":"Angular from Scratch",
    "category":"Software engineering",
    "duration":20,
    "author":"Boukil Naoual",
    "chapters":4
}]
  constructor() { }

  getCourses(): Observable<Cours[]> {
    const crs = of(this.courses)
    return crs;
  }
}
