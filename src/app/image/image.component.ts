import { Component, OnInit } from '@angular/core';
import { ImageProvider } from '../providers/image.provider';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers:[ImageProvider]
})
export class ImageComponent implements OnInit {

  constructor(private imageProvider: ImageProvider) { }

  json:any;
  data = {
    spotNo:'',
    image:'',
    order:''
  }

  ngOnInit() {
    this.imageProvider.getImage()
    .subscribe(
      (res) => this.json = res.json ()
    );
  }

  add(data) {
    this.imageProvider.postImage(this.data.spotNo, this.data.image, this.data.order)
    .subscribe(
      (res) => {
        this.ngOnInit();
      }
    );
    console.log(data);
  }

  delete(spotNo, order){
    this.imageProvider.deleteImage(spotNo, order).subscribe(
      (res) => {
        alert(res)
        this.ngOnInit();
      }
    )
  }

}
