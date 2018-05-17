import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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

    constructor() { }

}