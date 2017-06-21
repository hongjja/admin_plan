import { Component, OnInit } from '@angular/core';
import { AttrProvider } from '../providers/attr.provider';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-attr',
  templateUrl: './attr.component.html',
  styleUrls: ['./attr.component.css'],
  providers: [AttrProvider] // 뭐지?
})
export class AttrComponent implements OnInit {

  constructor(private http:HttpService, private attrProvider:AttrProvider) {}

  json:any;
  data = {
    spotNo:'',
    master:'',
    detail:'',
    value:''
  }

  ngOnInit() {
    this.attrProvider.getAttr()
    .subscribe(
      (res) => this.json=res.json()
    );
  }

  add(data) {
    this.attrProvider.postAttr(this.data.spotNo, this.data.master, this.data.detail, this.data.value)
    .subscribe(
      (res) => {
        this.ngOnInit();
      }
    );
    console.log(data);
  }

  delete(spotNo, master, detail){
    this.attrProvider.deleteAttr(spotNo, master, detail).subscribe(
      (res) => {
        alert(res)
        this.ngOnInit();
      }
    )
  }
}
