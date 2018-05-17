import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html'
})

export class SearchComponent {

    @Output() private searchText = new EventEmitter();

    constructor() { }

    public filterText(event, text: string) {
        this.searchText.emit(text);
    }
}