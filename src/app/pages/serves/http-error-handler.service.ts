import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() {
  }

  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  // tslint:disable-next-line:typedef
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;
      return of(result);
    };

  }
}
