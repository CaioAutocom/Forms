import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-card-list',
  templateUrl: './users-card-card-list.component.html',
  styleUrl: './users-card-card-list.component.scss'
})
export class UsersCardCardListComponent {
  @Input() usersList: UsersListResponse = [];
  @Output("onUserSelected") onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(userIndex: number){
    this.onUserSelectedEmitt.emit(userIndex);
  }
}
