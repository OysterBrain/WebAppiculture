import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { ConfigurationComponent } from '../configuration/configuration.component';
import { CarteRucherComponent } from '../carteRucher/carteRucher.component';
import { VisiteRucherComponent } from '../visiteRucher/visiteRucher.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AjoutEditionRucherComponent } from '../ajoutEditionRucher/ajoutEditionRucher.component';
import { ListeRuchersComponent } from '../listeRuchers/listeRuchers.component';
import { GestionRuchersComponent } from '../gestionRuchers/gestionRuchers.component';
import { RegisterUserComponent } from '../registerUser/registerUser.component';



@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ConfigurationComponent,
      CarteRucherComponent,
      VisiteRucherComponent,
      AccueilComponent,
      AjoutEditionRucherComponent,
      ListeRuchersComponent,
      GestionRuchersComponent,
      RegisterUserComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
