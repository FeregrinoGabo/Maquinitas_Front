import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrada } from '../../models/entrada'; 

@Service()
export class EntradaService {
    private http = inject(HttpClient);

    getEntradas(){
        return this.http.get<Entrada[]>('http://localhost:8080/api/entradas');
    }
}
