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

    note: Notes;
    private editNote: boolean = false;
    private viewNote: Boolean = false;

    constructor() { }

    public ngOnChanges() {
    }

    /**
     * This method close the detail modal.
     * @param event - The event of click.
     */
    public closeDetail(e): void {
        e.preventDefault();
        this.viewNote = !this.viewNote;
    }

    /**
     * This method close the edit modal.
     * @param event - The event of click.
     */
    public closeEdit(e): void {
        e.preventDefault();
        this.editNote = !this.editNote;
    }

    /**
     * This method set note to view in detail.
     * @param event - The event of click.
     * @param record - The note to view.
     */
    public detailRecord(e, record?: Notes): void {
        e.preventDefault();
        this.note = record;
        this.viewNote = !this.viewNote;
    }

    /**
     * This method set note to edit.
     * @param event - The event of click.
     * @param record - The record to edit.
     */
    public editRecord(e, record?: Notes): void {
        e.preventDefault();
        this.note = record;
        this.editNote = !this.editNote;
    }

    /**
     * This method emit the event to delete record.
     * @param record - The record to emit.
     */
    public deleteNote(record): void {
        this.viewNote = !this.viewNote;
        this.onDeleteRecord.emit(record);
    }

    /**
     * This method emit the event to edit record.
     * @param record - The record to emit.
     */
    public editNoteRecord(record): void {
        this.editNote = !this.editNote;
        this.onEditRecord.emit(record);
    }
}