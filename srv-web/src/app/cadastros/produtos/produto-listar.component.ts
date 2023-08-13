import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { CadastroService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos : Produto[];
  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private service : CadastroService) {
    this.produtos = [];
   }

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }
  

}
