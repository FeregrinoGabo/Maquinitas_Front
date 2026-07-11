import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../../models/empresa';

@Service()
export class EmpresaService {
    private http = inject(HttpClient);

    getEmpresas() {
        return this.http.get<Empresa[]>('http://localhost:8080/api/empresas');
    }
}
