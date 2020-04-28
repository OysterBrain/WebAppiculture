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
    { path: '', component: AccueilComponent, canActivate: [AuthGuard]},
    { path: 'Configuration', component: ConfigurationComponent,canActivate: [AuthGuard]},
    { path: 'GestionRuches', component: GestionRuchersComponent,canActivate: [AuthGuard]},
    { path: 'ListeRuchers', component: ListeRuchersComponent,canActivate: [AuthGuard]},
    { path: 'CarteRuchers', component: CarteRucherComponent,canActivate: [AuthGuard]},
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
