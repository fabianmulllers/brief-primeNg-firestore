import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/dialogAgregarEditar.action';

export interface DialogAgregarEditarState {
    mostrar : boolean; 
}

export const DialogAgregarState: DialogAgregarEditarState = {
   mostrar: false,
}

const _dialogAgregarEditarReducer = createReducer(DialogAgregarState,

    on(actions.show, (state, { mostrar }) => ({...state, mostrar : mostrar}) )
    
);

export function dialogAgregarEditarReducer(state : any, action: Action) {
    return _dialogAgregarEditarReducer(state, action);
}