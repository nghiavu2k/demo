import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  num = new BehaviorSubject<number>(1);
  crrNum = this.num.asObservable();

  constructor() { }

  changNum(num: number){
    this.num.next(num);
  }
}