import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, OnChanges } from '@angular/core';
import { Notes } from '../models/notes.data';

@Component({
    selector: 'table-component',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnChanges {

    /**
     * Set filter in table.
     */
    @Input() protected hasFilter: boolean;

    /**
     * Set records for table.
     */
    @Input() protected records: any[];

    /**
     * Set filter text.
     */
    @Input() protected searchText: any[];

    @Output() onDeleteRecord = new EventEmitter();

    note: Notes;
    viewNote: Boolean = false;
    
    constructor() { }

    public ngOnChanges(){
    }

    /**
     * This method emit the record to is detail.
     * @param event - The event of click.
     * @param record - The record to emit.
     */
    public detailRecord(e, record?: Notes): void {
        e.preventDefault();
        this.note = record;
        this.viewNote = !this.viewNote;
    }

    deleteNote(e): void {
        this.onDeleteRecord.emit(e);
        this.viewNote = !this.viewNote;
    }





}