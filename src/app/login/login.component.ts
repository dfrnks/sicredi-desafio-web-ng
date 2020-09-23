import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  checkoutForm;
  messagemLogin;
  hasError = false;
  showPassword = false;

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.checkoutForm = this.formBuilder.group({
      username: 'fake',
      password: 'fake123'
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data): void {
    this.hasError = false;
    if (!(data.username === 'fake' && data.password === 'fake123')) {
      this.hasError = true;
      this.messagemLogin = 'Usuário e senha inválido, tente novamente!';
    } else {
      window.sessionStorage.setItem('isLogged', String(true));
      this.messagemLogin = 'Logado com sucesso ...';
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
    }
  }
}
