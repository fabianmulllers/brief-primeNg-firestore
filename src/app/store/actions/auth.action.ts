import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';

export const identificarUsuario = createAction(
    '[Identificar Usuario] identificarUsuario',
    props<{email: string, password: string }>()
)

export const identificarUsuarioSuccess = createAction(
    '[Identificar Usuario Success] identificarUsuarioSuccess',
    props<{ usuario: Usuario }>()
)

export const identificarUsuarioError = createAction(
    '[Identificar Usuario Error] identificarUsuarioError',
    props<{payload : any}>()    
)
