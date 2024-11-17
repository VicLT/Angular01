import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = "LOGIN";
  usuario: string = "";
  pass: string = "";
  credencialesCorrectas: boolean = false;

  constructor(private router: Router) {}

  comprobarCredenciales(usuario: string, pass: string) {
    if (usuario == "admin" && pass == "admin") {
      this.credencialesCorrectas = true;
      this.router.navigate(['galeria']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}