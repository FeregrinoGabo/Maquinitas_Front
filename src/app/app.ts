import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario-component';
import { EmpresaComponent } from './components/empresa/empresa-component';
import { InventarioComponents } from './components/inventario/inventario-components';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioComponent, EmpresaComponent, InventarioComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{
  protected readonly title = signal('front_GestionMaquinas');

}
