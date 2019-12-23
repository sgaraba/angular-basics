import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  increas() {
    this.counter++;
  }

  decreas() {
    this.counter--;
  }
}
