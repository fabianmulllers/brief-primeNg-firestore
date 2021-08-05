import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoPublicacionComponent } from './components/listado-publicacion/listado-publicacion.component';

const routes: Routes = [
  
  {
    path:'',component:InicioComponent, children:[
      { path: 'inicio', component:ListadoPublicacionComponent },
      { path: '**', redirectTo:'inicio' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefRoutingModule { }
