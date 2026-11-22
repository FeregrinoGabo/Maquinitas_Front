import { Component, inject, signal } from '@angular/core';
import { AsignacionService } from '../../services/asignacion/asignacion-service';
import { Asignacion } from '../../models/asignacion';

@Component({
  selector: 'app-asignacion-components',
  imports: [],
  templateUrl: './asignacion-components.html',
  styleUrl: './asignacion-components.css',
})
export class AsignacionComponents {
  private asignacionService = inject(AsignacionService);

  protected asignacionList = signal<Asignacion[]>([]);

  ngOnInit(){
    this.cargaAsigancion();
  }

  cargaAsigancion(){
    this.asignacionService.getAsignaciones().subscribe(data => {
      this.asignacionList.set(data);
      console.log(this.asignacionList);
    })
  }
}
