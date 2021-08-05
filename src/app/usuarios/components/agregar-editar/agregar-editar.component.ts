import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { show } from '../../../store/actions/dialogAgregarEditar.action';
import { cargos, Usuario } from '../../interfaces/usuario.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { agregarUsuario } from 'src/app/store/actions';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styles: [
  ],
  providers: [ MessageService ]
})
export class AgregarEditarComponent implements OnInit {


  display: boolean = false;
  loading: boolean = false;

  cargos : cargos[] =[
    { value:'ejecutivo',nombre:'Ejecutivo'},
    { value:'desarrollador',nombre:'Desarrollador'},
    { value:'disenador',nombre:'Disenador'},
    { value:'Director',nombre:'Director'},
  ];

  myForm: FormGroup = this.fb.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      cargo:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
    },
    {
      validators:[ this.vs.passwordMatch('password','confirmPassword')]
    }
  )

    //mensaje personalizdos email

    get mensajeErrorEmail(){
      
      const error = this.myForm.get('email')?.errors
        
      if(error?.required){
          return 'Debes ingresar email';
      }
      
      if(error?.email){
          return 'Debes ingresar un email valido';
      }
  
      return;
    }

    //mensaje error password
    get mensajeErrorPassword(){
      
      const error = this.myForm.get('password')?.errors
        
      if(error?.required){
          return 'Debes ingresar password';
      }
      
      if(error?.minlength){
          return 'Debe tener minimo 6 caracteres';
      }
  
      return;
    }

    //mensaje error confirmPassword
    get mensajeErrorconfirmPassword(){
    
      const error = this.myForm.get('confirmPassword')?.errors
        
      if(error?.required){
        
          return 'Debes ingresar password';
      }

      if(error?.confirmPassword){
          return 'Los password no coinciden';
      }
  
      return;
    }
  
  
    
  constructor(
    private store :Store<AppState>,
    private fb    : FormBuilder,
    private vs    :ValidatorService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.store.select('dialogAgregarEditar')
        .subscribe( ({ mostrar }) => this.display = mostrar )
    
    this.store.select('usuario')
        .subscribe( ({loading,loaded,error})  => {
            this.loading = loading
            if(loaded){
              this.cerrarDialog();
              this.myForm.reset();
              this.messageService.add({severity:'success', summary: 'Success', detail: 'Usuario Creado con exito'});
            }

            if(error){
              if(error.code === 'auth/email-already-in-use'){
                
              }
              this.messageService.add({severity:'error', summary: 'Error', detail: error.message});
            }

        })
  }
  

  campoInvalido( campo: string) {
    return this.myForm.get( campo )?.invalid &&
        this.myForm.get( campo )?.touched
  }
  

  cerrarDialog(){
    this.store.dispatch( show( {mostrar: false} ) );
    this.myForm.reset();
  }

  agregarUsuario(){
    if( this.myForm.invalid){ return}
    
    const usuario: Usuario = {
      nombre  : this.myForm.get('nombre')?.value,
      email    : this.myForm.get('email')?.value,
      cargo   : this.myForm.get( 'cargo')?.value.value,
      password: this.myForm.get('password')?.value,
    }

    this.store.dispatch( agregarUsuario( { usuario: usuario }) );


  }
}

