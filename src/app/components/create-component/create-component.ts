import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentosService } from '../../services/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent implements OnInit {
  public departamento: Departamento = {} as Departamento;
  public mensaje: string = '';

  constructor(
    private _departamentosService: DepartamentosService,
    private _router: Router,
  ) {}
  ngOnInit(): void {}
  async onSubmit(): Promise<void> {
    this.mensaje = 'Enviando datos...';
    await this._departamentosService.postDepartamento(this.departamento);
    this.mensaje = 'Datos enviados correctamente.';
    this._router.navigate(['/']);
  }
}
