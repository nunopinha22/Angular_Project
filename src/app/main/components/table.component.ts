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
     * Set if has filter in table.
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
    @Output() onEditRecord = new EventEmitter();

    private note: Notes;
    private editNote: boolean = false;
    private viewNote: Boolean = false;

    constructor() { }

    public ngOnChanges() {
    }

    /**
     * This method close the detail.
     * @param event - The event of click.
     */
    public closeDetail(e): void {
        e.preventDefault();
        this.viewNote = !this.viewNote;
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

    /**
     * This method close the edit.
     * @param event - The event of click.
     */
    public closeEdit(e): void {
        e.preventDefault();
        this.editNote = !this.editNote;
    }

    /**
     * This method emit the record to is detail.
     * @param event - The event of click.
     * @param record - The record to emit.
     */
    public editRecord(e, record?: Notes): void {
        e.preventDefault();
        this.note = record;
        this.editNote = !this.editNote;
    }

    /**
     * This method emit the record to be deleted.
     * @param record - The record to emit.
     */
    public deleteNote(record): void {
        this.onDeleteRecord.emit(record);
        this.viewNote = !this.viewNote;
    }

    /**
     * This method emit the record to be edit.
     * @param record - The record to emit.
     */
    public editNoteRecord(record): void {
        this.onEditRecord.emit(record);
        this.editNote = !this.editNote;
    }
}