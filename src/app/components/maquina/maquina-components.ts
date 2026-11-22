import { Component, inject, signal} from '@angular/core';
import {MaquinaService} from '../../services/maquina/maquina-service';
import { Maquina } from '../../models/maquina';

@Component({
  selector: 'app-maquina-components',
  imports: [],
  templateUrl: './maquina-components.html',
  styleUrl: './maquina-components.css',
})
export class MaquinaComponents {
  private maquinaService = inject(MaquinaService);

  protected maquinaList = signal<Maquina[]>([]);

  ngOnInit(){
    this.cargaMaquinas();
  }

  cargaMaquinas(){
    this.maquinaService.getMaquinas().subscribe(data => {
      this.maquinaList.set(data);
      console.log(this.maquinaList);
    })
  }
}
