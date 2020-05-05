import { Action } from '@ngrx/store';

export interface AppState {
    texto: string;
}

export const initialState = {
    texto: 'Mi Texto'
};

export function reducer(state: AppState = initialState, action: Action) {
    console.log(action);

    switch (action.type) {
        case 'SPANISH':
            return {
                ...state,
                texto: 'Hola Mundo'
            };
        case 'ENGLISH':
            return {
                ...state,
                texto: 'Hello World'
            };
        default:
            return state;
    }
}
