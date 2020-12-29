import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpErrorHandlerService, HandleError} from './http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OblogService {

  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandlerService) {
  }

  private handleError: HandleError;

  addBlog(hero: string): Observable<string> {
    return this.http.post<string>('/save/blog', hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }

 /* getBlogSort(userId: number): Observable<string> {

  }*/


}
