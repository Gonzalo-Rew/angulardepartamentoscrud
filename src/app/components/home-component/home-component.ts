import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public departametos!: Departamento[];
  constructor(
    private _departamentosService: DepartamentosService,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.refreshDepartamentos();
  }

  async deleteDepartamento(id: number): Promise<void> {
    await this._departamentosService.deleteDepartamento(id);
    await this.refreshDepartamentos();
  }

  async refreshDepartamentos(): Promise<void> {
    this.departametos = await this._departamentosService.getDepartamentos();
    this._cdr.detectChanges();
  }
}
