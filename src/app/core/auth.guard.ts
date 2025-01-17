import { Injectable } from  '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from  '@angular/router';
import { Observable, of } from  'rxjs';
import { Router , Route } from '@angular/router';


@Injectable({
 providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router
) {}
 
 canActivate(  
 
   next:  ActivatedRouteSnapshot,
   state:  RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    console.log('navigationdetected');
    this.router.navigate(['/redirection']);
     return  false;
     
   }

  
}