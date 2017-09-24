import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log(event);
      //可以用instanceof来判断事件的类型，然后去做你想要做的事情
      console.log(event instanceof NavigationStart);
    });
  }
}

