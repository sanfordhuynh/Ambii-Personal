import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      var x = window.innerWidth
      console.log("width: " + x);
    }, 500);
  }

}
