import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router:Router,
    private authService: AuthService
  ){}
  canActivate(): Observable<boolean> | boolean {

    return this.authService.isAuth()
      .pipe( 
        tap( estado => {
          
          if(!estado ){
            
            this.router.navigate(['/brief'])
          }else{
            this.router.navigate(['/login'])
          }

        })
      );

  }
  canLoad(): Observable<boolean> | boolean {

      return this.authService.isAuth()
      .pipe( 
        tap( estado => {          
          if( estado ){
            this.router.navigate(['/brief'])
          }else{
            this.router.navigate(['/login'])
          }
          
        })
      );

  }
}
