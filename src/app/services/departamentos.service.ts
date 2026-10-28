import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable()
export class DepartamentosService {
  constructor(private _http: HttpClient) {}

  urlApiDepartamentos: string = environment.urlApiDepartamentos;

  async getDepartamentos(): Promise<Departamento[]> {
    const url = this.urlApiDepartamentos + '/api/departamentos';
    return firstValueFrom(this._http.get<Departamento[]>(url));
  }

  postDepartamento(departamento: Departamento): Observable<unknown> {
    const url = this.urlApiDepartamentos + '/api/departamentos';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(url, departamento, { headers });
  }
}
