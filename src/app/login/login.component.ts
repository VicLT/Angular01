import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import 'animate.css';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = "LOGIN";
  usuario: string = "";
  pass: string = "";

  constructor(private router: Router) {}

  comprobarCredenciales(usuario: string, pass: string) {
    if (usuario == "admin" && pass == "admin") {
      this.mostrarAlertaPositiva();
    } else {
      this.mostrarAlertaNegativa();
    }
  }

  mostrarAlertaPositiva() {
    Swal.fire({
      title: 'Credenciales correctas',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/galeria']);
      }
    });
  }

  mostrarAlertaNegativa() {
    Swal.fire({
      title: 'Credenciales incorrectas',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}