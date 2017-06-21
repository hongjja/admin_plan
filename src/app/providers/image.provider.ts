import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class ImageProvider {

    resource: string = '/spot/image';

    constructor(private httpService:HttpService) {}

    getImage() {
        return this.httpService.get(this.resource)
    }
    
    postImage(spotNo,image,order) {
        return this.httpService.post(this.resource, {spotNo:spotNo, image:image, order:order})
    }

    putImage(name, content, x, y, id) {
        return this.httpService.put(this.resource, {id: id, name: name, content: content, x: x, y: y})
    }

    deleteImage(spotNo, order) {
        return this.httpService.delete(this.resource, {spotNo:spotNo, order:order})
    }
}