import { Component, inject, signal } from '@angular/core';
import { TiendaService } from '../../services/tienda/tienda-service';
import { Tienda } from '../../models/tienda';

@Component({
  selector: 'app-tienda-components',
  imports: [],
  templateUrl: './tienda-components.html',
  styleUrl: './tienda-components.css',
})
export class TiendaComponents {
  private tiendaService = inject(TiendaService);

  protected tiendaList = signal<Tienda[]>([]);

  ngOnInit(){
    this.cargaTIendas();
  }

  cargaTIendas(){
    this.tiendaService.getTiendas().subscribe(data => {
      this.tiendaList.set(data);
      console.log(this.tiendaList);
    })
  }

}
