import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioService } from './services/usuario/usuario-service';
import { EmpresaService } from './services/empresa/empresa-service';
import { Usuario } from './models/usuario';
import { Empresa } from './models/empresa';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit{
  protected readonly title = signal('front_GestionMaquinas');

  private usuarioService = inject(UsuarioService);
  private empresaService = inject(EmpresaService);

  protected usuariosList = signal<Usuario[]>([]);
  protected empresasList = signal<Empresa[]>([]);

  ngOnInit() {
    this.cargaUsuarios();
    this.cargaEmpresas();
  }

  cargaUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuariosList.set(data);
      console.log(this.usuariosList);
    });
  }

  cargaEmpresas() {
    this.empresaService.getEmpresas().subscribe(data => {
      this.empresasList.set(data);
      console.log(this.empresasList);
    })
  }
}
