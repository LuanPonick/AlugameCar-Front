import { isNgContainer } from '@angular/compiler';
import { Component } from '@angular/core';
import { PoPageListLiterals } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryType, PoPageLoginCustomField, PoPageLoginLiterals, PoPageLoginRecovery } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  customLiterals: PoPageLoginLiterals = {
    welcome: 'Fazer Login',
    loginLabel: 'Email',
    passwordLabel : "Senha",
    forgotYourPassword: 'Esqueceu sua senha?',
    submitLabel:"Login"

  };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.fly.dev/v1/users',
    type: PoModalPasswordRecoveryType.Email,
    contactMail: 'aluga.me@car.com'
  };

  trocarSenha():void{
    alert('teste');
  }

}
