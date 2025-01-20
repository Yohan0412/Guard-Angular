import { Injectable } from "@angular/core";
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  @Injectable()
  export class UserService {
    
    login(): Observable<boolean>  {
        console.log("add");
        return of(false).pipe( 
         delay(3000)
         
       );
  }
}