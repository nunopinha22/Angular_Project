import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'table-component',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

    /**
     * Set records for table.
     */
    @Input() protected records: any[];

    constructor() { }

    ngOnInit() { }
}