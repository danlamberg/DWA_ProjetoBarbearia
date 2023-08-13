import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  clientes : Cliente[] = [];
  colunas: string[] = ['codigo', 'nome', 'descricao', 'acoes'];
  constructor(private cadastro : CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listar().subscribe(clientes => {
      console.log(clientes);
      this.clientes = clientes;
    });
  }

}
