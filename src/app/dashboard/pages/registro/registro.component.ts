import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { maxDateValidator } from './date-validators';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export default class RegistroComponent implements OnInit {
  

  registroForm: FormGroup;
  today: string;

  constructor(private fb: FormBuilder) {
    this.today = new Date().toISOString().split('T')[0]; // Obtiene la fecha de hoy en formato YYYY-MM-DD

    this.registroForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{1,25}$/)]],
      nombreUsuario: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,16}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{1,9}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,12}$/)]],
      repeatPassword: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, maxDateValidator(this.today)]],
      direccion: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');
    if (password && repeatPassword && password.value !== repeatPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const newUser = this.registroForm.value;
      let usersString = localStorage.getItem('users');
      let users = usersString ? JSON.parse(usersString) : [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Registro exitoso!");
      //this.router.navigate(['/dashboard']) // Redirigir a la página de inicio de sesión
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
