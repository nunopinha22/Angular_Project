import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnChanges {
    @Output() private searchText = new EventEmitter();

    constructor() {
    }

    public ngOnChanges() {
    }

    public filterText(event, text: string) {
        this.searchText.emit(text);
    }
}