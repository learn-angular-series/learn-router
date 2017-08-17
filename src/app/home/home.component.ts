import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router:Router,
    public activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params)=>{console.log(params)}
    );
  }
}
