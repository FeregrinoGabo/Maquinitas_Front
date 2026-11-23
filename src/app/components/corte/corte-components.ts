import { Component, inject, signal } from '@angular/core';
import {CorteService} from '../../services/corte/corte-service';
import { Corte } from '../../models/corte';

@Component({
  selector: 'app-corte-components',
  imports: [],
  templateUrl: './corte-components.html',
  styleUrl: './corte-components.css',
})
export class CorteComponents {
  private corteService = inject(CorteService);

  protected corteList = signal<Corte[]>([]);

  ngOnInit(){
    this.cargaCorte();
  }

  cargaCorte(){
    this.corteService.getCortes().subscribe(data => {
      this.corteList.set(data);
      console.log(this.corteList);
    })
  }
}
