import { Component,OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Cours} from '../../Cours'

@Component({
  selector: 'app-cours-card',
  templateUrl: './cours-card.component.html',
  styleUrls: ['./cours-card.component.css']
})
export class CoursCardComponent implements OnInit {

  @Input() cours!: Cours
  constructor(){}

  ngOnInit(): void {}

}
