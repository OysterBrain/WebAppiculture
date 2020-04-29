import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginService.userConnected()) {
            // s'il y a un utilisateur on retourne true
            return true;
        }

        // si pas de d'utilisateur inséré on retourne au login
        this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}