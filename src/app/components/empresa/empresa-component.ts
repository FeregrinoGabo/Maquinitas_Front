import { Component, inject, signal, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresa/empresa-service';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-empresa-component',
  imports: [],
  templateUrl: './empresa-component.html',
  styleUrl: './empresa-component.css',
})
export class EmpresaComponent implements OnInit {
  private empresaService = inject(EmpresaService);

  protected empresasList = signal<Empresa[]>([]);

  ngOnInit(){
    this.cargarEmpresas();
  }

  cargarEmpresas(){
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresasList.set(data);
      console.log(this.empresasList);
    })
  }
}
