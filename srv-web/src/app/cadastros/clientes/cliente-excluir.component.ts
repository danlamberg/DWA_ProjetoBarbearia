import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-excluir',
  templateUrl: './cliente-excluir.component.html',
  styleUrls: ['./cliente-excluir.component.css']
})
export class ClienteExcluirComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private cadastro: CadastroService, 
              private router: Router,
              private route: ActivatedRoute) { 
    console.log("--------> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("--------> Executou o método ngOnInit()");
    const str = this.route.snapshot.paramMap.get("id");
    this.cadastro.buscarClientePorCodigo(Number(str)).subscribe((cliente) =>{
      this.cliente = cliente;
    });
  }

  excluirCliente(){
    console.log("--------> Executou o método excluirCliente()");
    this.cadastro.excluir(this.cliente.id).subscribe(() => {
          this.router.navigate(['/cadastros/clientes']);
    });
  }

}
