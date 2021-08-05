import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { UsuarioService } from '../../usuarios/services/usuario.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffect {

    constructor(
       private actions$: Actions,
       private us: UsuarioService
    ){}


    agregarUsuario$ = createEffect(
        ():any  => this.actions$.pipe(
             ofType( actions.agregarUsuario ),
             mergeMap( 
                 ( action ) => this.us.agregarUsuario( action.usuario ).pipe(
                     map( usuario => actions.agregarUsuarioSuccess( { usuario: {...usuario} } ) ),
                     catchError( error => of(actions.agregarUsuarioError( { payload: {...error} })) )
                     
                )
             )
        )
    );
    
}









