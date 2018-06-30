import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => { console.log(params) }
    );
  }

  public manualNav(): void {
    // this.router.navigateByUrl("/jokes");
    //navigate方法不支持矩阵式参数
    this.router.navigate(["/jokes"], { queryParams: { page: 1, name: 222 } });
  }
}
