import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage: string = "Message from parent";
  vote: number = 0;

  voteCount(value: number) {
    this.vote = value;
  }
}