import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export default interface AppState {
    router: fromRouter.RouterReducerState;
};

export { AppState };

const reducersDefinition: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer
};

export const appReducers = reducersDefinition;

// Routing
export const getRouter = (state: AppState) => state.router;
export const getRouterPath = (state: AppState) => state.router.state.url;
