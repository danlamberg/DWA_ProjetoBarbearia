import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ClienteEditarComponent } from './cadastros/clientes/cliente-editar.component';
import { ClienteExcluirComponent } from './cadastros/clientes/cliente-excluir.component';
import { ClienteIncluirComponent } from './cadastros/clientes/cliente-incluir.component';
import { ClienteListarComponent } from './cadastros/clientes/cliente-listar.component';
import { ProdutoEditarComponent } from './cadastros/produtos/produto-editar.component';
import { ProdutoExcluirComponent } from './cadastros/produtos/produto-excluir.component';
import { ProdutoIncluirComponent } from './cadastros/produtos/produto-incluir.component';
import { ProdutoListarComponent } from './cadastros/produtos/produto-listar.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'cadastros', component: CadastrosComponent,
  children: [
    { path: 'produtos', component: ProdutoListarComponent },
    { path: 'produtos/incluir', component: ProdutoIncluirComponent },
    { path: 'produtos/editar/:id', component: ProdutoEditarComponent },
    { path: 'produtos/excluir/:id', component: ProdutoExcluirComponent } 
    ]
  },
  { path: 'cadastros', component: CadastrosComponent,
  children:[
    { path: 'clientes', component: ClienteListarComponent },
    { path: 'clientes/incluir', component: ClienteIncluirComponent },
    { path: 'clientes/editar/:id', component: ClienteEditarComponent },
    { path: 'clientes/excluir/:id', component: ClienteExcluirComponent}
  ]
},
  { path: 'sobre', component: SobreComponent },
  { path: 'serviços', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
