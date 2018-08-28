import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from './reducers/user-notes.reducer';

export const reducerName = 'main';

export interface MainState {
    userNotes: fromNotes.UserNoteState;
}

export const reducers: ActionReducerMap<MainState> = {
    userNotes: fromNotes.UserNoteReducer
};

const getModuleState = createFeatureSelector<MainState>(reducerName);

// User Notes
export const getNotes = createSelector(getModuleState, (state: MainState) => state.userNotes.notes);
