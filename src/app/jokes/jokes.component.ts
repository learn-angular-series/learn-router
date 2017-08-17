import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    public router:Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (queryParam)=>{console.log(queryParam)}
    );
    this.activeRoute.params.subscribe(
      (params)=>{console.log(params)}
    );
  }

}
