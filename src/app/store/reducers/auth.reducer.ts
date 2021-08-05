import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';
import * as actions from '../actions';


export interface AuthState {
    usuario: Usuario | null;
    loaded: boolean;
    loading: boolean;
    email: string;
    password: string;
    error: any 
}

export const AuthState: AuthState = {
   usuario: null,
   loaded: false,
   loading: false,
   email:'',
   password:'',
   error: null
}

const _authReducer = createReducer(AuthState,

    on(actions.identificarUsuario, (state, { email, password}) => (
        { 
            ...state,
            loaded: false,
            loading: true,
            error: null,
            email: email,
            password: password
        }
    )),

    on(actions.identificarUsuarioSuccess, (state, { usuario }) => (
        { 
            ...state,
            usuario: usuario,
            loaded: false,
            loading: true,
            error: null,
            email: '',
            password: ''
        }
    )),


    on(actions.identificarUsuarioError, (state, { payload }) => (
        { 
            ...state,
            usuario: null,
            loaded: false,
            loading: false,
            error: payload,
            email: '',
            password: ''
        }
    )),


);

export function authReducer(state: any , action: Action ) {
    return _authReducer(state, action);
}