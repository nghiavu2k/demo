import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  num = new BehaviorSubject<number>(1);
  currNum = this.num.asObservable();

  constructor() { }

  changeNum(num: number) {
    this.num.next(num);
  }
}