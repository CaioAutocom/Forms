import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/gengers-list.response';
import { StatesListResponse } from '../../types/states-list.response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit(): void {
    // somente quando o componente é carregado, caso as propriedades sejam populadas depois, o OnInit não captura as mudanças
    // caso precisasse de alguma lógica nas listas, no ngonInit não é ideial, porque as informações podem não estar populadas na hora de executar a lógica.
  }

  ngOnChanges(changes: SimpleChanges): void {
    //executa cada vez que alguma propriedade da classe ser alterada
  }
} 
