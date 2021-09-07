import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinedService {

  url="https://data-test2-b1af6-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

  public getAllVacc():Observable<any>{
    return this.http.get(`${this.url}vaccinated.json`)
  }

  public getAllUnvacc():Observable<any>{
    return this.http.get(`${this.url}unvaccinated.json`)
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}unvaccinated/${id}.json`);
  }

  public updateVac(id:string,val):Observable<any>{
    return this.http.patch(`${this.url}unvaccinated/${id}.json`,{"doses":val})
  }

  public create(body: any): Observable<any>{
    return this.http.post(
      `${this.url}vaccinated.json`,
      body);
  }
}