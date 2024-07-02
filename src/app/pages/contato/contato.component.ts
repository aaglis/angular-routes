import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit{
  private routeParams = inject(ActivatedRoute)

  //formas de resgatar dados da rota ativada

  getId = signal<string | null>(null)
  @Input() set id(id: string) {
    this.getId.set(id)
  }

  ngOnInit(): void {
    console.log(this.routeParams.snapshot.params['id'])
    this.routeParams.params.subscribe(res => console.log(res['id']))
  }

  /*
    formas de uso dos parametros de rotas:
    um projeto real puxando uma lista de itens de uma api, modificando a rota para
    cada item da lista(passando o id). eviando para o componente o elemento com o
    respectivo id e abrindo os itens do elemento.
  */
}
