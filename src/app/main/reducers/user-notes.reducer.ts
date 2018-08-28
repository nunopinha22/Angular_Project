import * as Actions from '../actions/user-notes.action';

export interface UserNoteState {
    notes: any[];
}

const initialState: UserNoteState = {
    notes: []
}

export function UserNoteReducer(state = initialState, action: Actions.UserNotesAction): UserNoteState {
    switch (action.type) {
        case Actions.ActionTypes.GET_NOTES_SUCCESS: {
            if (state.notes.length == 0) {
                return Object.assign({}, state, {
                    notes: Object.assign([], action.payload.notes)
                });
            }
            else {
                return Object.assign({}, state);
            }
        }
        case Actions.ActionTypes.DELETE_NOTE: {
            const newList = state.notes.filter(el => el.id !== action.payload);
            return Object.assign({}, state, {
                notes: Object.assign([], newList)
            });
        }
        case Actions.ActionTypes.EDIT_NOTE: {
            let editItem = state.notes.find(el => el.id === action.payload.id);
            editItem.title = action.payload.title;
            editItem.content = action.payload.content;
            return Object.assign({}, state, {
                notes: Object.assign([], state.notes)
            });
        }
        case Actions.ActionTypes.INSERT_NOTE: {
            const newState = state.notes;
            console.log('reducer', action.payload);
            newState.unshift({
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
            })
            return Object.assign({}, state, {
                notes: Object.assign([], newState)
            });
        }
        default:
            return state;
    }
}