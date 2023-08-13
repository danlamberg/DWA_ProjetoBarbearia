import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoListarComponent } from './cadastros/produtos/produto-listar.component';
import { ProdutoEditarComponent } from './cadastros/produtos/produto-editar.component';
import { ProdutoIncluirComponent } from './cadastros/produtos/produto-incluir.component';
import { ProdutoExcluirComponent } from './cadastros/produtos/produto-excluir.component';
import { ClienteExcluirComponent } from './cadastros/clientes/cliente-excluir.component';
import { ClienteEditarComponent } from './cadastros/clientes/cliente-editar.component';
import { ClienteListarComponent } from './cadastros/clientes/cliente-listar.component';
import { ClienteIncluirComponent } from './cadastros/clientes/cliente-incluir.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CadastrosComponent,
    SobreComponent,
    ProdutoListarComponent,
    ProdutoEditarComponent,
    ProdutoIncluirComponent,
    ProdutoExcluirComponent,
    ClienteExcluirComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    ClienteIncluirComponent,
    ServicosComponent,
    ContatoComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
