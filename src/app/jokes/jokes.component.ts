import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  public jokeContent:string="";
  public saved:boolean=true;

  constructor() { }

  ngOnInit() {

  }

  writeJoke(value){
    this.jokeContent=value;
    this.saved=false;
  }

  saveContent(){
    console.log(this.jokeContent);
    this.jokeContent="";
    this.saved=true;
  }
}
