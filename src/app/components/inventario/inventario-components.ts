import { Component, inject, signal } from '@angular/core';
import {InventarioService} from '../../services/inventario/inventario-service'
import { Inventario } from '../../models/inventario';

@Component({
  selector: 'app-inventario-components',
  imports: [],
  templateUrl: './inventario-components.html',
  styleUrl: './inventario-components.css',
})
export class InventarioComponents {
  private inventarioService = inject(InventarioService)

  protected inventarioList = signal<Inventario[]>([]);

  ngOnInit(){
    this.cargaInventarios();
  }

  cargaInventarios(){
    this.inventarioService.getInventarios().subscribe(data => {
      this.inventarioList.set(data);
      console.log(this.inventarioList);
    })
  }
}
