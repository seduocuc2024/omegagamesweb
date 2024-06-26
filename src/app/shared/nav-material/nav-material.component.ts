import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import AuthService from '../../services/auth.service';

/**
 * @description
 * Componente de barra de navegacion
 * 
 * Este componente genera la barra de navegacion la cual esta de forma estatica y es siempre visible
 */


@Component({
  selector: 'app-nav-material',
  templateUrl: './nav-material.component.html',
  styleUrl: './nav-material.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule
  ]
})
export default class NavMaterialComponent {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }


  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
