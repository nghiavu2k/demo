import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html'
})
export class Child3Component implements OnInit {
  num!: number;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currNum.subscribe(number => this.num = number);
  }
}
