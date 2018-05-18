import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Catalog } from '../models/catalog';

@Component({
    selector: 'table-component',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent {

    /**
     * Set records for table.
     */
    @Input() protected records: Catalog[];

    /**
     * Set filter text.
     */
    @Input() protected searchText: any[];

    @Output('record-detail')
    protected recordDetailEmitter = new EventEmitter();

    constructor() { }

    /**
     * This method emit the record to is detail.
     * @param event - The event of click.
     * @param record - The record to emit.
     */
    public detailRecord(event: Event, record: Catalog): void {
        // this.stopPropagation(event);
        this.recordDetailEmitter.emit(record);
    }

}