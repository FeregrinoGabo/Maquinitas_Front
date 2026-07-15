import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maquina } from '../../models/maquina';

@Service()
export class MaquinaService {
    private http = inject(HttpClient);

    getMaquinas(){
        return this.http.get<Maquina[]>('http://localhost:8080/api/maquinas');
    }
}
