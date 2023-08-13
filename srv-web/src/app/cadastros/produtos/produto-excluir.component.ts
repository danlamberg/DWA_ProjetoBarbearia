import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CadastroService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-excluir',
  templateUrl: './produto-excluir.component.html',
  styleUrls: ['./produto-excluir.component.css']
})
export class ProdutoExcluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private cadastro: CadastroService, 
       private router: Router,
       private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cadastro.buscarPorId(Number(id)).subscribe(produto => {
        this.produto = produto;
    });

  }

  excluirProduto(){
    this.cadastro.excluir(this.produto.id).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
    });
  }

}
