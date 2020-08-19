import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './../services/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private provider: ServiceApiService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(usu: string, sen: string) {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'login',
        usuario: usu,
        senha: sen
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        if ( data['success']) {
          this.router.navigate(['/usuarios']);
        } else {
          alert('falha no login!');
        }
        resolve(true);
        });
    });
  }

}
