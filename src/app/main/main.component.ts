import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Catalog } from './models/catalog';
import { CatalogService } from './services/catalog';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as Actions from './actions/user-notes.action';
import * as fromNotes from './main.reducers';
import { Observable } from 'rxjs';

/**
 * Pipe to filter text inputed by user.
 */
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any, filter: any): any {
        if (filter && Array.isArray(items)) {
            return items.filter(x => x.content.toLowerCase().includes(filter.Text.toLowerCase())
                || x.title.toLowerCase().includes(filter.Text.toLowerCase()));
        } else {
            return items;
        }
    }
}

@Component({
    selector: 'main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    title = 'app';
    private searchTerm: string = '';
    private notes$: Observable<any[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private appStore: Store<fromNotes.MainState>) { 

            this.appStore.dispatch(new Actions.GetAllNotes());
         }

    ngOnInit() {
        this.notes$ = this.appStore.select(fromNotes.getNotes);
    }

    /**
     * Action to set filter value text.
     * @param value
     */
    public searchInCatalogs(value: string): void {
        this.searchTerm = value;
    }

    /**
     * Action to selected object.
     * @param obj
     */
    public detail(obj: Catalog): void {
        this.router.navigate(['../detail', obj.code], { relativeTo: this.route });
    }

    deleteRecord(id: number){
        console.log('delete record Container', id);
        this.appStore.dispatch(new Actions.DeleteUserNote(id));
    }
}