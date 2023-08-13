import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CadastroService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

  produto : Produto = new Produto();

  salvarProduto(){// console.log("Salvar Produto!");
    console.log("-----------> O salvarProduto() foi executado!")
    this.cadastro.incluir(this.produto).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
    });
    
  }


  constructor(private cadastro: CadastroService,
              private router: Router) {
                console.log("-----------> O construtor foi executado!")
               }

  ngOnInit(): void { 
    console.log("-----------> O ngOnInit foi executado!")
  }
}