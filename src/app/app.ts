import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario-component';
import { EmpresaComponent } from './components/empresa/empresa-component';
import { InventarioComponents } from './components/inventario/inventario-components';
import { MaquinaComponents } from './components/maquina/maquina-components';
import { TiendaComponents } from './components/tienda/tienda-components';
import { AsignacionComponents } from './components/asignacion/asignacion-components';
import { CorteComponents } from './components/corte/corte-components';
import { EntradaComponents } from './components/entrada/entrada-components';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioComponent, 
    EmpresaComponent, 
    InventarioComponents, 
    MaquinaComponents,
    TiendaComponents,
    AsignacionComponents,
    CorteComponents,
    EntradaComponents
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{
  protected readonly title = signal('front_GestionMaquinas');

}
