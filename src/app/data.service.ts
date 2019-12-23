import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  articles = ['News', 'Analysis', 'Markets'];

  myData() {
    return this.articles[0];
  }

}
