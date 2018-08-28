import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Notes } from '../models/notes.data';

@Injectable()
export class CatalogService {
    constructor(public _http: Http) { }

    public getInitialNotes() {
        return this._http.get('../assets/api/notes.data.json')
            .map((response: Response) => {
                let result = response.json() as Notes

                return result;
            })
    }
}