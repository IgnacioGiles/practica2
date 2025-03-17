import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { ComponentsComponent } from './components/components.component';
import { ServicesComponent } from './services/services.component';
import { ModelsComponent } from './models/models.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,   
    ComponentsComponent,
    ServicesComponent,
    ModelsComponent,
    NavbarComponent,
    FooterComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
