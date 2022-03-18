import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { UserInfo } from "./Model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class RandomUserService{

    private apiUrl = "https://randomuser.me/api/";
   
    constructor(private http: HttpClient) {
   }
  
  getEntities(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.apiUrl)
     .pipe(      
   catchError(this.handleError<UserInfo>('getEntities'))
     ); 
  }
   

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log('${operation} failed: ${error.message}');
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}