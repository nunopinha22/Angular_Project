import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import * as Actions from '../actions/user-notes.action';
import * as fromNotes from '../main.reducers';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes.data';

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
    searchTerm: string = '';
    notes$: Observable<any[]>;
    private createNote: boolean = false;

    constructor(
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
    public searchInNotes(value: string): void {
        this.searchTerm = value;
    }

    /**
     * Action to delete object id.
     * @param id
     */
    public deleteRecord(id: number) {
        this.appStore.dispatch(new Actions.DeleteUserNote(id));
    }

    /**
     * Action to edit object.
     * @param id
     */
    public editRecord(obj: Object) {
        this.appStore.dispatch(new Actions.EditUserNote(obj));
    }

    /**
     * Action to create object.
     * @param id
     */
    public createNoteRecord(obj: Object) {
        this.createNote = !this.createNote;
        this.appStore.dispatch(new Actions.InsertUserNote(obj));
    }

    /**
     * Action to sort notes.
     * @param sortDesc
     */
    public sortRecords(sortDesc: boolean) {
        this.appStore.dispatch(new Actions.GetAllNotesSorted(sortDesc));
    }

    /**
     * This method emit the record to is detail.
     * @param event - The event of click.
     */
    public toogleModal(e): void {
        e.preventDefault();
        this.createNote = !this.createNote;
    }
}