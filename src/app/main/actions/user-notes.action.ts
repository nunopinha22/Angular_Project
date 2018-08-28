import { Action } from '@ngrx/store';

export const ActionTypes = {
    GET_NOTES: '[UserNotes] Get Notes',
    GET_NOTES_SUCCESS: '[UserNotes] Get Notes Success',
    GET_NOTES_SORT: '[UserNotes] Get Notes Sorted',
    EDIT_NOTE: '[UserNotes] Edit User Notes',
    DELETE_NOTE: '[UserNotes] Delete User Notes',
    INSERT_NOTE: '[UserNotes] Insert User Notes',
    FAIL_NOTE: '[UserNotes] Fail User Notes',
};

export class GetAllNotes implements Action {
    public type = ActionTypes.GET_NOTES;
    constructor(public payload?: any) {
    }
}

export class GetAllNotesSuccess implements Action {
    public type = ActionTypes.GET_NOTES_SUCCESS;
    constructor(public payload: any) {
    }
}

export class GetAllNotesSorted implements Action {
    public type = ActionTypes.GET_NOTES_SORT;
    constructor(public payload: boolean) {
    }
}

export class EditUserNote implements Action {
    public type = ActionTypes.EDIT_NOTE;
    constructor(public payload?: any) { }
}

export class DeleteUserNote implements Action {
    public type = ActionTypes.DELETE_NOTE;
    constructor(public payload: number) { }
}

export class InsertUserNote implements Action {
    public type = ActionTypes.INSERT_NOTE;
    constructor(public payload: any) { }
}

export class UserNotesFailAction implements Action {
    public type = ActionTypes.FAIL_NOTE;
    constructor(public payload?: any) { }
}

export type UserNotesAction
    = GetAllNotes
    | GetAllNotesSuccess
    | EditUserNote
    | DeleteUserNote
    | InsertUserNote
    | UserNotesFailAction;