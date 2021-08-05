import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { UsuarioService } from '../../usuarios/services/usuario.service';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';


@Injectable()
export class UsuariosEffect {

    constructor(
       private actions$: Actions,
       private us: UsuarioService
    ){}

    
    cargarUsuarios$ = createEffect(
        ():any  => this.actions$.pipe(
                 ofType( actions.cargarUsuarios ),
                 mergeMap( 
                    () => this.us.getUsuarios()
                    .pipe(   
                            map( ( usuarios:Usuario[] ) => actions.cargarUsuariosSuccess( { usuarios: usuarios } ) ),
                            catchError( error => of(actions.cargarUsuariosError( { payload: error})) )
                        )
                    )
            )
    );
}

