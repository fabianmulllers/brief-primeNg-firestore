
import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';
import * as actions from '../actions';

export interface UsuariosState {
    usuarios: Usuario[] | null;
    loaded: boolean;
    loading: boolean;
    error:any; 
}

export const UsuariosState: UsuariosState = {
    usuarios: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(UsuariosState,

    on(actions.cargarUsuarios, (state) => (
            { 
                ...state,
                loaded  : false,
                loading : true,
                error   :null
            }
        )
    ),

    on(actions.cargarUsuariosSuccess, (state,{usuarios}) => (
            { 
                ...state,
                usuarios: [...usuarios],
                loaded  : true,
                loading : false,
                error   :null
            }
        )
    ),

    on(actions.cargarUsuariosError, (state, { payload }) => (
        { 
            ...state,
            loaded  : false,
            loading : false,
            error   : payload
        }
    )
)

);    

export function usuariosReducer(state: any, action: Action) {
    return _usuariosReducer(state, action);
}