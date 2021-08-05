import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label:'Inicio',
        icon:'pi pi-home',
        routerLink:'/brief',
      },
      {
        label:'Briefs',
        icon:'pi pi-briefcase',
      },
      {
        label:'Admin',
        icon:'pi pi-home',
        items:[
            {
              label:'Usuarios',
              icon:'pi pi-align-left',
              routerLink:'/usuarios',
            }
        ]
      }
    ];

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
