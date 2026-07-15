import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventario } from '../../models/inventario';

@Service()
export class InventarioService {
    private http = inject(HttpClient);

    getInventarios(){
        return this.http.get<Inventario[]>('http://localhost:8080/api/inventarios');
    }
}
