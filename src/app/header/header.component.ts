import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false; // Aqui você deve definir a lógica para verificar se o usuário está logado

  onLogin() {
    // Lógica para autenticação do usuário
    this.isLoggedIn = true;
  }

  onLogout() {
    // Lógica para desautenticar o usuário
    this.isLoggedIn = false;
  }
}
