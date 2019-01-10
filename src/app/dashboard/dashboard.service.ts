import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ElementLine} from '../core/model/elementLine.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {map} from 'rxjs/operators';
import {mesureData} from '../core/model/mesureData.model';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private list$: Observable<mesureData[]>;
  listeMesures: mesureData[];
  isHere = false;

  constructor(private httpService: HttpClient) {
  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }

  getAllElementLine(): Observable<mesureData[]> {
    console.log(this.listeMesures);
    console.log(this.isHere);

    if (!this.listeMesures) {
      return this.httpService.get<mesureData[]>(`${environment.apiUrl}/`)
        .catch(this.errorHandler);
    } else {
      return Observable.of(this.listeMesures);
    }
  }


  // getElementLine(id: string): Observable<mesureData> {
  //   this.list$ = this.getAllElementLine();
  //   return this.list$.pipe(
  //     map(list => list.filter(alertLine => alertLine.alarm_id === id)[0])
  //   );
  // }
}
