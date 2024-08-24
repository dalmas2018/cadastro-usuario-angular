import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Importar o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { } // Injetar o Router

  login() {
    this.authService.login(this.email, this.senha).subscribe(response => {
      this.message = response.message;
      if (response.user_id) {
        // Redirecionar para a página inicial
        this.router.navigate(['/home']); // Ou a rota da página inicial que você desejar
      }
    }, error => {
      this.message = 'Erro ao tentar fazer login.';
    });
  }
}
