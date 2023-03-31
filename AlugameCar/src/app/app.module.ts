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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoButtonModule,
    PoPageLoginModule,
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
