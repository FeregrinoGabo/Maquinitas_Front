import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corte } from '../../models/corte';

@Service()
export class CorteService {
    private http = inject(HttpClient);

    getCortes(){
        return this.http.get<Corte[]>('http://localhost:8080/api/cortes');
    }
}
