import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Sicredi Desafio Web Angular';

  logout(): void {
    window.sessionStorage.removeItem('isLogged');
    window.location.reload();
  }
}
