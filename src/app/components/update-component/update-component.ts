import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { Params, ActivatedRoute , Router} from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit {
  public departamento!: Departamento;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _departamentosService: DepartamentosService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this._activateRoute.params.subscribe(async (params: Params) => {
      const id = parseInt(params['id']);
      this.departamento = await this._departamentosService.getDepartamentoById(id);
      this._cdr.detectChanges();
    });
  }

  async onSubmit(): Promise<void> {
    await this._departamentosService.putDepartamento( new Departamento(this.departamento.numero, this.departamento.nombre, this.departamento.localidad));
    this._router.navigate(['/details', this.departamento.numero, this.departamento.nombre, this.departamento.localidad]);
  }
}
