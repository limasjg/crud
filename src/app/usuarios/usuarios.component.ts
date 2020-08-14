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
  email = '';
  senha = '';

  constructor(
    private provider: ServiceApiService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
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
          for ( const dado of data[' result ']) {
            this.lista.push(dado);
          }
          resolve(true);
        });
    });
  }

}
