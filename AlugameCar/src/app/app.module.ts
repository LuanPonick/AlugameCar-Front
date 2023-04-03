import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoButtonModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PoPageLoginModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { PoDynamicModule } from '@po-ui/ng-components';
import { OldHomePageComponent } from './components/old-home-page/old-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent,
    CadastroComponent,
    OldHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoButtonModule,
    PoPageLoginModule,
    PoTemplatesModule,
    PoDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
