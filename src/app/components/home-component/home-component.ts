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

  ngOnInit(): void {
    this._departamentosService.getDepartamentos().then((departamentos) => {
      this.departametos = departamentos;
      this._cdr.detectChanges();
    });
  }
}
