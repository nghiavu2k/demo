import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  createMessage(message: string) {
    this.data.changeMessage(message);
  }

}
