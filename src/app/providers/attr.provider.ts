import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class AttrProvider {

    resource: string = '/spot/attr';

    constructor(private httpService:HttpService) {}

    getAttr() {
        return this.httpService.get(this.resource)
    }

    getByID(id) {
        return this.httpService.get(this.resource, {id: id})
    } // 이거 아닌거 같은딩 // 일단 이렇게 하는걸로
    
    postAttr(spotNo, master, detail, value) {
        return this.httpService.post(this.resource, {spotNo: spotNo, master: master, detail: detail, value: value})
    }

    putAttr(name, content, x, y, id) {
        return this.httpService.put(this.resource, {id: id, name: name, content: content, x: x, y: y})
    }

    deleteAttr(spotNo, master, detail) {
        return this.httpService.delete(this.resource, {spotNo:spotNo, master:master, detail:detail})
    }
}