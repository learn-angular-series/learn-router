import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {
  public menuName:string="没有选择任何菜单";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: { id: string }) => {
      console.log("当前菜单的ID>"+params.id);
      if(params.id=="1"){
        this.menuName="只看图片";
      }else if(params.id=="2"){
        this.menuName="只看文字";
      }
    });
  }
}
