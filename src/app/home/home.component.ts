import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { RequestOptions } from '@angular/http';
import { SpotProvider } from '../providers/spot.provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SpotProvider]
})
export class HomeComponent implements OnInit {

  //title = 'TEACH YOUR PLAN'
  
  id:any; // 수정할때 받을거
  json:any;
  data = {
      name:'', //string
      content:'', //string
      x:'', //string
      y:'' //string
  }

  constructor(private http: HttpService, private spotProvider: SpotProvider) { }

  ngOnInit() {
    this.spotProvider.getSpot()
    .subscribe(
      (res) => this.json=res.json()
    );
  }
  

  add(data) {
    this.spotProvider.postSpot(this.data.name, this.data.content, this.data.x, this.data.y)
    .subscribe(
      (res) => {
        this.ngOnInit();
      }
    );
    console.log(data);
  }

  update(data) {
    this.data.name = data.name;
    this.data.content = data.content;
    this.data.x = data.x;
    this.data.y = data.y;
    this.id = data.id; 
  } 
  
  modify(data) {
    this.spotProvider.putSpot(this.data.name, this.data.content, this.data.x, this.data.y, this.id)
    .subscribe(
      (res) => {
        this.ngOnInit();
      });

    console.log(data);
  }

  delete(id) {
    this.spotProvider.deleteSpot(id).subscribe(
      (res) => {
        alert(res)
        this.ngOnInit();
      })
  }
}
