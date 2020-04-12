import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Account, Map} from './app.models';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountResult(req?: any): Observable<HttpResponse<Account[]>> {
    return this.http.get<Account[]>(`http://localhost:8070/users/id/${req.id}/account/${req.account}/ai_type/${req.ai_type}/start_time/${req.start_time}/duration/${req.duration}/end_time/${req.end_time}`,{observe:'response'});
  }
}
