import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LoginComponent } from '../login/login.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { ConfigurationComponent } from '../configuration/configuration.component';
import { GestionRuchersComponent } from '../gestionRuchers/gestionRuchers.component';
import { ListeRuchersComponent } from '../listeRuchers/listeRuchers.component';
import { CarteRucherComponent } from '../carteRucher/carteRucher.component';
import { RegisterUserComponent } from '../registerUser/registerUser.component';


//Tableau des routes qui comporte l'ensemble des routes permettant de naviguer dans l'application
const routes: Routes = [
    //  { path: '', component: ACCUEILCOMPONENT, canActivate: [AuthGuard] },
    { path: '', component: AccueilComponent},
    { path: 'Configuration', component: ConfigurationComponent},
    { path: 'GestionRuches', component: GestionRuchersComponent},
    { path: 'ListeRuchers', component: ListeRuchersComponent},
    { path: 'CarteRuchers', component: CarteRucherComponent},
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
