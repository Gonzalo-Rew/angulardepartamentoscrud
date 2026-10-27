import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent implements OnInit {
  public departamento = {} as Departamento;
  constructor(private _departamentosService: DepartamentosService) {}
  ngOnInit(): void {}
  onSubmit() {
    this._departamentosService.postDepartamento(this.departamento);
  }
}
