import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interfaces';
import { map, mergeMap } from 'rxjs/operators';


@Injectable()
export class authEffect {

    constructor(
       private actions$: Actions,
       private authService: AuthService
    ){}


//     identificarUsuario$ = createEffect(
//         ():any  => this.actions$.pipe(
//             ofType( actions.identificarUsuario ),
//             mergeMap( 
//                 ( action ) => this.authService.autentificar( action.email, action.password ).pipe(
                    
//                     // map( (usuario: Usuario) => actions.identificarUsuarioSuccess({ usuario: usuario }) )

//                 )

//             )
//         )
//    );
}

    