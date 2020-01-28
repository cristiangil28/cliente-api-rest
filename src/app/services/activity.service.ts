import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../model/activity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  

  constructor(private http: HttpClient) { 
    console.log('Servicio activity Funcionando');
  }

  getActivities(): Observable<Activity[]> {
    var sufix ='listaractividades';
    return this.http.get(`${this.baseUrl}/${sufix}`).pipe(
      map(data => data as Activity[])
    );
  }

  createActivity(activity: Activity): Observable<Activity> {
    var sufix ='actividad';
    return this.http.post<Activity>(`${this.baseUrl}/${sufix}`, activity, {headers: this.httpHeaders});
  }
}
