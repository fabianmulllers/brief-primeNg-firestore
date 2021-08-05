import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
  ) { }
  

  initAuthListener(){
    
    return this.auth.authState.subscribe( fbUser => {
      
        if( fbUser ){
          // logeado
        }else{
          
        }
    
    });

  }
  
  autentificar( usuario: string, password: string){
    const autentificar$ = from( this.auth.signInWithEmailAndPassword(usuario, password) );
    
    return autentificar$;
  }

  logout() {
      
    this.auth.signOut();
  
  }

  isAuth() {
    return this.auth.authState.pipe(
      map( resp => resp != null)
    );
  }
  

}
