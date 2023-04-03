import { Component, NgModule } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { PoModalPasswordRecoveryType, PoPageLoginLiterals, PoPageLoginRecovery } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent {
  validateFields: Array<string> = ['state'];
  geral : number = 5;
  componentes : Array<PoDynamicFormField> = [
    {
      property: 'Primeiro nome',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: this.geral,
      gridSmColumns: 12,
      placeholder: 'Primeiro nome',
    },
    {
      property: 'cpf',
      label: 'Seu CPF',
      placeholder:"CPF",
      mask: '999.999.999-99',
      gridColumns: this.geral,
      gridSmColumns: 7,
    },
    {
      property: 'Sobrenome',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: this.geral,
      gridSmColumns: 12,
      placeholder: 'Sobrenome',
    },
    {
      property: 'birthday',
      label: 'Data De Nascimento',
      placeholder:'XX/XX/XXXX',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: this.geral,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.'
    },
    {
      property: 'email',
      label:'E-mail',
      placeholder:'E-mail',
      gridColumns: this.geral,
      gridSmColumns : 12,
      icon: 'po-icon-mail'
    },
    {
      property: 'phone',
      label:'Numero telefone',
      placeholder:'Telefone',
      mask: '(99) 99999-9999',
      gridColumns: this.geral,
      gridSmColumns:12
    },
    {
      property: 'secretKey',
      label: 'Senha',
      gridColumns: this.geral,
      gridSmColumns :12,
      secret: true,
      maxLength:255,
      minLength: 8,
      pattern: '[A-Z] [a-z] [Z0-9] [@!#$%^&*()/]',
      errorMessage: 'A senha deve conter entre 8-255 CARACTERES sendo no minimo 1 letra MAÍUSCULA e mínimo 1 caractere ESPECIAL',
      placeholder: 'Senha',
    },
    {
      property :'nada',
      gridColumns: 4,
      gridSmColumns: 0
    },
    {
      property: 'cep',
      label: 'CEP',
      mask: ' 99999-999',
      gridColumns: this.geral,
      gridSmColumns: 12,
    },

    {
      property: 'secretKey',
      label: 'Senha',
      gridColumns: this.geral,
      gridSmColumns:12,
      secret: true,
      maxLength:255,
      minLength: 8,
      pattern: '[a-z][0-9][@!#$%^&*()/]',
      errorMessage: 'A senha deve conter entre 8-255 CARACTERES sendo no minimo 1 letra MAÍUSCULA e mínimo 1 caractere ESPECIAL',
      placeholder: 'Senha',
    }
  ]
  constructor(public poNotification: PoNotificationService) {

  }
}
