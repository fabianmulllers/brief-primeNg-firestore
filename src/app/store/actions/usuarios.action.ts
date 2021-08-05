import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';

export const cargarUsuarios = createAction(
    '[Cargar Usuarios] cargarUsuarios'
);


export const cargarUsuariosSuccess = createAction(
    '[Cargar Usuarios Success] cargarUsuariosSuccess',
    props< {usuarios: Usuario[] } >()
);


export const cargarUsuariosError = createAction(
    '[Cargar Usuarios Error] cargarUsuariosError',
    props<{ payload: any }>()
);
