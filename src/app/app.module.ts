import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { ContactanosComponentComponent } from './contactanos-component/contactanos-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    ProductosComponentComponent,
    FormularioComponentComponent,
    ContactanosComponentComponent,
    NavbarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
