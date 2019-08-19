import { Injectable } from '@angular/core';
import { 
  HttpInterceptor, 
  HttpRequest, 
  HttpHandler, 
  HttpEvent,
  HttpEventType,
  HttpErrorResponse  
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
          private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if(token) {
          request = request.clone({
            setHeaders: {
                Authorization: 'Bearer '+ token
            } 
        });
    }
    return next.handle(request)
  }  

}
