import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ElementLine} from '../core/model/elementLine.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {map} from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class DemonstratorService {


  private list$: Observable<ElementLine[]>;

  constructor(private httpService: HttpClient) {
  }


  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  getAllElementLine(): Observable<ElementLine[]> {
    return this.httpService.get<ElementLine[]>(`${environment.apiUrl2}/`)
      .catch(this.errorHandler);
  }

  getElementLine(id: string): Observable<ElementLine> {
    this.list$ = this.getAllElementLine();
    return this.list$.pipe(
      map(list => list.filter(alertLine => alertLine.alarm_id === id)[0])
    );
  }
}
