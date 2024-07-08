import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import NavMaterialComponent from './shared/nav-material/nav-material.component';
import CarroComponent from './shared/carro/carro.component';
import LoginComponent from './shared/login/login.component';
import AuthService from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavMaterialComponent,CarroComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OMEGAGAMESWEB';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
