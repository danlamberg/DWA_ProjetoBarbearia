import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  
  constructor(private http: HttpClient) { }

  URL = "http://localhost:3001/clientes";

  listar() : Observable<Cliente[]>{    
    return this.http.get<Cliente[]>(this.URL);
  }

  buscarClientePorCodigo(codigo : number) : Observable<Cliente>{
    return this.http.get<Cliente>(this.URL + "/" + codigo);
  }

  incluir(cliente : Cliente) : Observable<any> {
    return this.http.post(this.URL, cliente);
  }
  atualizar(codAtualizar: number, clienteAlterado: Cliente) : Observable<any> {
    return this.http.put<any>(this.URL + "/" + codAtualizar, clienteAlterado);
  }

  excluir(codigo : number) : Observable<any> {
    return this.http.delete(this.URL + "/" + codigo);
  }
}
