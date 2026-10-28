import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  styleUrl: './details-component.css',
  templateUrl: './details-component.html',
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      const numero = parseInt(params['id']);
      const nombre = params['nombre'];
      const localidad = params['localidad'];
      this.departamento = new Departamento(numero, nombre, localidad);
      this._cdr.detectChanges();
    });
  }
}
