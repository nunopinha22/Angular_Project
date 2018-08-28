import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';

import * as fromApp from '../reducers/user-notes.reducer';
import * as moduleActions from '../actions/user-notes.action';
import { CatalogService } from '../services/catalog';

@Injectable()
export class UserNotesEffects {

    @Effect()
    public getUserServers$: Observable<Action> = this.actions$
        .ofType(moduleActions.ActionTypes.GET_NOTES)
        .switchMap(() => this._catalogService.getCatalogList()
            .map((response: any) => new moduleActions.GetAllNotesSuccess(response))
            .catch((error) => of(new moduleActions.UserNotesFailAction(error)))
        );

    constructor(
        private actions$: Actions,
        private store$: Store<fromApp.UserNoteState>,
        private _catalogService: CatalogService) { }
}
