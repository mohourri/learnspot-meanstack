import { Component,OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Cours} from '../../Cours'
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cours-card',
  templateUrl: './cours-card.component.html',
  styleUrls: ['./cours-card.component.css'],
})
export class CoursCardComponent implements OnInit {

  @Input() course!: Cours
  constructor(){}

  ngOnInit(): void {}
  onClick(course:Cours):void{
    console.log(course)
  }


}
