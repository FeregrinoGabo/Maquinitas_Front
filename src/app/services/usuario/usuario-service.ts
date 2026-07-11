import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';

@Service()
export class UsuarioService {
    private http = inject(HttpClient);

    getUsuarios(){
        return this.http.get<Usuario[]>('http://localhost:8080/api/usuarios');
    }
}
