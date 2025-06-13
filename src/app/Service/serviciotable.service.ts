import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyTable } from '../Modelo/mytable';

@Injectable({
  providedIn: 'root'
})
export class ServiciotableService {

  constructor(private http: HttpClient) { }
  Url='https://render-back-ejemplo.onrender.com/personas';
  getTable(){
    return this.http.get<MyTable[]>(`${this.Url}`);
  }

 

  postTable(t:MyTable){
    return this.http.post<Object>(`${this.Url}`,t);
  }
}
