import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  someProperty:string= '';

  ngOnInit() {
    this.someProperty = this.dataService.myData();
  }
}
