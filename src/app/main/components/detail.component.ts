import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'detail-note',
    templateUrl: 'detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

    @Input() detailNote;
    @Output() onView = new EventEmitter();
    @Output() onDelete = new EventEmitter();
  
    doneViewing(e) {
      this.onView.emit(e);
    }
  
    deleteNote(e) {
      e.preventDefault();
      this.onDelete.emit(this.detailNote.id);
    }
  
    constructor() { }
  
    ngOnInit() { }
}