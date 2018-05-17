import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Catalog } from '../models/catalog';

@Injectable()
export class CatalogService {

    constructor(public _http: Http) { }

    public getCatalogList() {        
        return this._http.get('assets/api/catalog.json')
            .map((response: Response) => {
                let result = response.json() as Catalog

                return result;
            })
            // .do(data => console.log('All: ' + JSON.stringify(data)))
    }
}