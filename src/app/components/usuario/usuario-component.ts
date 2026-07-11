import { Component, signal, inject, OnInit} from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario-service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-component',
  imports: [],
  templateUrl: './usuario-component.html',
  styleUrl: './usuario-component.css',
})
export class UsuarioComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  protected usuariosList = signal<Usuario[]>([]);

  ngOnInit(){
    this.cargaUsuarios();
  }

  cargaUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuariosList.set(data);
      console.log(this.usuariosList);
    })
  }
}
