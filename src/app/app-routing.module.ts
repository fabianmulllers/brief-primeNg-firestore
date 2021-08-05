import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  { 
    path:'usuarios',
    loadChildren:() => import('./usuarios/usuarios.module').then( m => m.UsuariosModule),
    canActivate:[ AuthGuard ],
    canLoad: [AuthGuard]
  },
  { 
    path:'brief',
    loadChildren:() => import('./brief/brief.module').then( m => m.BriefModule),
    canActivate:[ AuthGuard ],
    canLoad: [AuthGuard]
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
