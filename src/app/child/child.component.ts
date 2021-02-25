import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Input() receiveMess!: string;
  @Output() voteSize = new EventEmitter();
  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  voted() {
    this.counter++;
    this.voteSize.emit(this.counter);
  }

}
