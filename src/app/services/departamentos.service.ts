import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DepartamentosService {
  constructor(private _http: HttpClient) {}

  urlApiDepartamentos: string = environment.urlApiDepartamentos;

  async getDepartamentos(): Promise<Departamento[]> {
    const url = this.urlApiDepartamentos + '/api/departamentos';
    return firstValueFrom(this._http.get<Departamento[]>(url));
  }

  async postDepartamento(departamento: Departamento): Promise<any> {
    const url = this.urlApiDepartamentos + '/api/departamentos';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this._http.post(url, JSON.stringify(departamento), { headers }));
  }
}
