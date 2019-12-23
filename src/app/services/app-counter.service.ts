import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {
  }

  increas() {
    this.logService.log('Increas counter');
    this.counter++;
  }

  decreas() {
    this.logService.log('Decreas counter');
    this.counter--;
  }
}
