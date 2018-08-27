import { Action } from '@ngrx/store';

export const ActionTypes = {
    GET_NOTES: '[UserNotes] Get Notes',
    GET_NOTES_SUCCESS: '[UserNotes] Get Notes Success',
    EDIT_NOTE: '[UserNotes] Edit User Notes',
    DELETE_NOTE: '[UserNotes] Delete User Notes',
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

export class EditUserNote implements Action {
    public type = ActionTypes.EDIT_NOTE;
    constructor(public payload?: any) { }
}

export class DeleteUserNote implements Action {
    public type = ActionTypes.DELETE_NOTE;
    constructor(public payload: number) { }
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
    | UserNotesFailAction;