import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './../services/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  nome = '';
  usuario = '';
  senha = '';
  id = '';
  title = 'Inserir Usuário';
  textoBuscar = '';

  constructor(
    private router: Router,
    private provider: ServiceApiService
  ) { }

  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textoBuscar);
  }

  carregar(texto: string) {
    return new Promise(resolve => {
      this.lista = [];
      this.start = 0;
      const dados = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
          // tslint:disable-next-line: no-string-literal
          for ( const dado of data['result']) {
            this.lista.push(dado);
          }
          resolve(true);
        });
    });
  }

  adicionar() {
    if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
      return new Promise(resolve => {
        const dados = {
          requisicao: 'add',
          nome: this.nome,
          usuario: this.usuario,
          senha: this.senha
        };
        this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
            // tslint:disable-next-line: no-string-literal
            if ( data['success']) {
              alert('Salvo com Sucesso!');
              this.router.navigate(['/usuarios']);
            } else {
              alert('Salvo com Sucesso!');
            }
          });
      });
    } else {
      alert ('Preencha TODOS os campos!');
    }
  }

  dadosEditar(nome: string, usuario: string, senha: string, id: string) {
    // console.log(nome, usuario, senha, id);
    this.title = 'Editar Usuário';
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.id = id;
  }

  editar() {
    if (this.nome !== '' && this.usuario !== '' && this.senha !== '') {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'editar',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        id: this.id

      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
          // tslint:disable-next-line: no-string-literal
          if ( data['success']) {
            alert('Salvo com Sucesso!');
            this.router.navigate(['/usuarios']);
          } else {
            alert('Salvo com Sucesso!');
          }
        });
    });
  } else {
    alert ('Preencha TODOS os campos!');
  }
  }

  excluir(idu: string) {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'excluir',
        id: idu

      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
          // tslint:disable-next-line: no-string-literal
          if ( data['success']) {
            alert('Excluido com Sucesso!');
            this.router.navigate(['/usuarios']);
          } else {
            alert('Salvo ao Salvar!');
          }
        });
    });
  }
}
