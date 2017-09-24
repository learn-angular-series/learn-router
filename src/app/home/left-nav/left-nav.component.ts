import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toogle(id) {
    this.router.navigate(['/home', {outlets: {'main-area': [id]}}]);
  }
}
