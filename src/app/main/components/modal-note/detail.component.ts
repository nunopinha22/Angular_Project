import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-note',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailComponent implements OnInit {

  @Input() detailNote;
  @Output() onView = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  doneViewing(e) {
    this.onView.emit(e);
  }

  deleteNote(e) {
    e.preventDefault();
    this.onDelete.emit(this.detailNote.id);
  }
}