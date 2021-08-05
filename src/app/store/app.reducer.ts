import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
    dialogAgregarEditar: reducers.DialogAgregarEditarState,
    usuario: reducers.UsuarioState
    usuarios: reducers.UsuariosState
}



export const appReducers: ActionReducerMap<AppState> = {
    dialogAgregarEditar: reducers.dialogAgregarEditarReducer ,
    usuario: reducers.usuarioReducer,
    usuarios: reducers.usuariosReducer
}