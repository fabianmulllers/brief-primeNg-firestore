import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';

// agregar usuarios

export const agregarUsuario = createAction(
    '[Agregar Usuario] agregarUsuario',
    props<{ usuario: Usuario }>()
);

export const agregarUsuarioSuccess = createAction(
    '[Agregar Usuario Success] agregarUsuarioSucess',
    props< { usuario: Usuario } >()
);

export const agregarUsuarioError = createAction(
    '[Agregar Usuario Error] agregarUsuarioError',
    props< { payload: any } >()
);


// eliminar usuarios

export const eliminarUsuario = createAction(
    '[eliminar Usuario] eliminarUsuario',
    props<{ id : string }>()
);

export const eliminarUsuarioSucces = createAction(
    '[eliminar Usuario Success] eliminarUsuarioSucces');


export const eliminarUsuarioError = createAction(
    '[eliminar Usuario Error] eliminarUsuarioError',
    props<{ payload : any }>()
);