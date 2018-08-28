import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'edit-note',
    templateUrl: './editable-note.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditableNoteComponent implements OnInit {
    @Input() detailNote;
    @Output() onBack = new EventEmitter();
    @Output() onEditNote = new EventEmitter();

    /* The form validator.*/
    private form: FormGroup;

    constructor(private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formbuilder.group({
            title: new FormControl(this.detailNote !== undefined ?
                this.detailNote.title : '', Validators.required),
            content: new FormControl(this.detailNote !== undefined ?
                this.detailNote.content : '', Validators.required)
        });
    }

    _Toggle(e) {
        this.onBack.emit(e);
    }

    editNote(e) {
        e.preventDefault();
        const obj: Object = {
            id: this.detailNote !== undefined ? this.detailNote.id : new Date().getTime(),
            time: this.formatDate(),
            title: this.form.value.title,
            content: this.form.value.content
        };

        this.onEditNote.emit(obj);
    }

    formatDate(): any {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(new Date().getTime(), 'EEEE, MMMM d');
    }
}
