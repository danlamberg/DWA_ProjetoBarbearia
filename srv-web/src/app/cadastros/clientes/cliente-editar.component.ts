import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { CadastroService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private cadastro: CadastroService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log("--------> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("--------> Executou o método ngOnInit()");
    const str = this.route.snapshot.paramMap.get("id");
    console.log(Number(str));
    this.cadastro.buscarClientePorCodigo(Number(str)).subscribe((cliente) =>{
      this.cliente = cliente;
    });
  }
  atualizarCliente(){
    console.log("--------> Executou o método salvarCliente()");
    this.cadastro.atualizar(this.cliente.id, this.cliente).subscribe(() => {
          this.router.navigate(['/cadastros/clientes']);
    });
  }
}
