import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignacion } from '../../models/asignacion';
 
@Service()
export class AsignacionService {
    private http = inject(HttpClient);

    getAsignaciones(){
        return this.http.get<Asignacion[]>('http://localhost:8080/api/asignaciones');
    }
}
