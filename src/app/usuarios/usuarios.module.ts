import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    ListadoComponent,
       TablaComponent,
       InicioComponent,
       AgregarEditarComponent,
       ToolbarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    PrimeNgModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
