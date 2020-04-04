import { Injectable, Inject } from '@angular/core';
import {HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllItem() {
    return this.http.get(`/api/search/all`);
  }

  public getItemById(id: any) {
    return this.http.get(`/api/search/${id}`);
  }

  public addItemToTable(name, code, manuscript, info, bibliography) {

    const item = {name, code, manuscript, info, bibliography};

    return this.http.post(`/api/search/save`, item);
  }

  public deteleFromTable(id: any) {
    return this.http.post(`/api/search/item/${id}`, {});
  }

  public editRow(id: any, name, code, manuscript, info, bibliography) {
    const item = {name, code, manuscript, info, bibliography};
    return this.http.post(`/api/search/item/${id}/edit`, item);
  }
}
