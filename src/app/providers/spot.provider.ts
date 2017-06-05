import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class SpotProvider {

    resource: string = '/spot';

    constructor(private httpService:HttpService) {}

    getSpot() {
        return this.httpService.get(this.resource)
    }
    
    postSpot(name, content, x, y) {
        return this.httpService.post(this.resource, {name: name, content: content, x: x, y: y})
    }

    putSpot(name, content, x, y, id) {
        return this.httpService.put(this.resource, {id: id, name: name, content: content, x: x, y: y})
    }

    deleteSpot(id) {
        return this.httpService.delete(this.resource, {id: id})
    }
}