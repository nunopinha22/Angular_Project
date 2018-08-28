import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-note',
    templateUrl: './editable-note.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditableNoteComponent implements OnInit {

    /* The form validator.*/
    private form: FormGroup;

    @Input() detailNote;
    @Output() onBack = new EventEmitter();
    @Output() onEditNote = new EventEmitter();

    _Toggle(e) {
        this.onBack.emit(e);
    }

    editNote(e) {
        e.preventDefault();
        const obj: Object = {
            id: this.detailNote !== undefined ? this.detailNote.id : new Date().getTime(),
            title: this.form.value.title,
            content: this.form.value.content
        };

        this.onEditNote.emit(obj);
    }

    constructor(private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formbuilder.group({
            title: new FormControl(this.detailNote !== undefined ?
                this.detailNote.title : '', Validators.required),
            content: new FormControl(this.detailNote !== undefined ?
                this.detailNote.content : '', Validators.compose([Validators.required, Validators.minLength(8)]))
        });
    }
}
