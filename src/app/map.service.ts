import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Account, Map} from './app.models';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getMapResult(req?: any): Observable<HttpResponse<Map[]>> {
    return this.http.get<Map[]>(`http://localhost:8070/map/ai_type/${req.ai_type}/ai_name/${req.ai_name}`,{observe:'response'});
  }
}
