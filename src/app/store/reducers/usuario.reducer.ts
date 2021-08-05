import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../usuarios/interfaces/usuario.interfaces';

export interface UsuarioState {
    usuario: Usuario | null;
    loaded : boolean;
    loading: boolean;
    error  : any;
    uid?   :string;
}

export const UsuarioState: UsuarioState = {
   usuario: null,
   loaded : false,
   loading: false,
   error  : null,
}

const _usuarioReducer = createReducer(UsuarioState,
    
    // agregar usuario
        on(actions.agregarUsuario,(state, { usuario } )=> (
            {
                ...state, 
                loading: true,
                loaded : false,
                usuario: usuario,
                error  :null
            })
        ),

        on(actions.agregarUsuarioSuccess,(state, { usuario } )=> (
            {   ...state,
                usuario: usuario,
                loaded : true,
                loading: false,
                error  :null
            }
        )),

        on(actions.agregarUsuarioError,(state, { payload } )=> (
            {    ...state,
                usuario : null,
                loaded  : false,
                loading : false,
                error   : payload
            }
        )),
    // agregar usuario

    // eliminar Usuario
        on(actions.eliminarUsuario,(state, { id } )=> (
            {
                ...state, 
                loading: true,
                loaded : false,
                error  : null,
                uid    : id
            })
        ), 

        on(actions.eliminarUsuarioSucces,(state)=> (
            {
                ...state, 
                loading: false,
                loaded : true,
                error  :null
            })
        ), 

        on(actions.eliminarUsuarioError,(state, { payload })=> (
            {
                ...state, 
                loading: false,
                loaded : false,
                error  : payload
            })
        ), 
);

export function usuarioReducer( state: any, action: Action) {
    return _usuarioReducer(state, action);
}