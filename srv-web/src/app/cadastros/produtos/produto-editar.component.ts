import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CadastroService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private cadastro: CadastroService, 
              private router: Router,
              private route: ActivatedRoute) { 
    console.log("--------> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("--------> Executou o método ngOnInit()");
    const str = this.route.snapshot.paramMap.get("id");
    this.cadastro.buscarPorId(Number(str)).subscribe((produto) =>{
      this.produto = produto;
    });
  }

  atualizarProduto(){
    console.log("--------> Executou o método salvarProduto()");
    this.cadastro.atualizar(this.produto.id, this.produto).subscribe(() => {
          this.router.navigate(['/cadastros/produtos']);
    });
  }
}