import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './../services/service-api.service';

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

  constructor(
    private provider: ServiceApiService
  ) { }

  ngOnInit() {
    this.lista = [];
    this.start = 0;
    this.carregar();
  }

  carregar() {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start
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
            location = 'usuarios';
          } else {
            alert('Salvo com Sucesso!');
          }
        });
    });
  }

  editar(nome: string, usuario: string, senha: string, id: string) {
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.id = id;
  }


}
