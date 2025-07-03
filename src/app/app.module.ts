import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CounterComponent } from './components/counter/counter.component';
import { GreetComponent } from './components/greet/greet.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { FormAutoComponent } from './components/form-auto/form-auto.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { ThemeComponent } from './components/theme/theme.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CounterComponent,
    GreetComponent,
    ProductItemComponent,
    FormComponent,
    FormAutoComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    ThemeComponent,
    AuthUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
