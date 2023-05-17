import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './page/cabecera/cabecera.component';
import { MenuComponent } from './page/menu/menu.component';
import { TextoComponent } from './page/texto/texto.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './page/contacto/contacto.component';
import { AcercadeComponent } from './page/acercade/acercade.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    TextoComponent,
    ContactoComponent,
    AcercadeComponent
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
