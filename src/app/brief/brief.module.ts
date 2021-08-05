import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefRoutingModule } from './brief-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { ListadoPublicacionComponent } from './components/listado-publicacion/listado-publicacion.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent,
    PublicacionComponent,
    ListadoPublicacionComponent
  ],
  imports: [
    CommonModule,
    BriefRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class BriefModule { }
