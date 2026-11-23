import { Component, signal, inject } from '@angular/core';
import {EntradaService} from '../../services/entrada/entrada-service'
import { Entrada } from '../../models/entrada';

@Component({
  selector: 'app-entrada-components',
  imports: [],
  templateUrl: './entrada-components.html',
  styleUrl: './entrada-components.css',
})
export class EntradaComponents {
  private entradaService = inject(EntradaService);

  protected entradaList = signal<Entrada[]>([]);

  ngOnInit(){
    this.caragaEntrada();
  }

  caragaEntrada(){
    this.entradaService.getEntradas().subscribe(data => {
      this.entradaList.set(data);
      console.log(this.entradaList);
    })
  }
}
