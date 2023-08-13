import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-incluir',
  templateUrl: './cliente-incluir.component.html',
  styleUrls: ['./cliente-incluir.component.css']
})
export class ClienteIncluirComponent implements OnInit {


  cliente: Cliente = new Cliente();

  constructor(private cadastro: CadastroService, 
              private router: Router) { 
    console.log("--------> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("--------> Executou o método ngOnInit()");
  }

  salvarCliente(){
    console.log("--------> Executou o método salvarCliente()");
    this.cadastro.incluir(this.cliente).subscribe(() => {
          this.router.navigate(['/cadastros/clientes']);
    });
  }
}