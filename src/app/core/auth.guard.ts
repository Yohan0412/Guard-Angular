import { Injectable } from  '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, GuardResult, MaybeAsync, CanActivateChild} from  '@angular/router';
import { Observable, of } from  'rxjs';
import { Router , Route } from '@angular/router';
import { UserService } from '../user.service';


@Injectable({
 providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  
  
  constructor(private Userservice: UserService) {}
  


 canActivate(  

  
   _next:  ActivatedRouteSnapshot,
   _state:  RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    console.log('navigationdetected');
    return this.Userservice.login();
    //  return false;
     
   }

  

  
}


