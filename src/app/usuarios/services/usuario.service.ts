import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interfaces';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, of, Observable, observable } from 'rxjs';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { usuarioReducer } from '../../store/reducers/usuario.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) { }
  

  getUsuarios(){
    
    console.log( 'ingresaste' )
    return this.firestore.collection('usuarios')
      .snapshotChanges()
      .pipe(
        map( snapshot => ( snapshot.map(doc => ({ uid: doc.payload.doc.id , ... doc.payload.doc.data() as any })) ) )
      )
    
  }
  
  agregarUsuario( usuario: Usuario ){
       
    const crearUsuario = from(this.auth.createUserWithEmailAndPassword(usuario.email, usuario.password))
    let uid: string | undefined = ''; 
    return crearUsuario.pipe(
      tap( ( { user} ) => uid = user?.uid ),
      switchMap( ( { user} ) => from( this.firestore.doc(`usuarios/${ user?.uid }`).set( { ...usuario, uid:user?.uid } ) ) ),
      map( () => ( { ...usuario, uid }  ) ) 
    )
    
  }

  eliminarUsuario( id: string){
    
    this.auth

  }
  
}

