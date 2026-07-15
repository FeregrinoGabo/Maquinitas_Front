import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../../models/tienda';

@Service()
export class TiendaService {
    private  http = inject(HttpClient);

    getTiendas(){
        return this.http.get<Tienda[]>('http://localhost:8080/api/tiendas');
    }
}
