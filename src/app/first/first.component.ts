import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
