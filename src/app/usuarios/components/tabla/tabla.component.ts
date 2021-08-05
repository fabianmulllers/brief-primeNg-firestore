
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../../store/actions/usuarios.action';
import { Usuario } from '../../interfaces/usuario.interfaces';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ],
  providers: [ConfirmationService,MessageService]
})
export class TablaComponent implements OnInit {
  
  usuarios: Usuario[] = [];
  constructor(
      private store: Store<AppState>,
      private confirmationService: ConfirmationService,
      private messageService: MessageService
  ) {}

  ngOnInit(): void {
    
      this.store.select('usuarios')
        .pipe(
          filter( usuarios => usuarios.usuarios != null)
        )
        .subscribe( usuarios => {
            console.log( usuarios.usuarios )
            this.usuarios = usuarios.usuarios!
        } )
    
      this.store.dispatch( actions.cargarUsuarios() )
  }
  

  editarUsuario( usuario: Usuario ){

  }

  eliminarUsuario( usuario: Usuario ){

    this.confirmationService.confirm({
        message: '¿Estás segura de que quieres realizar esta acción?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });

  }

}
