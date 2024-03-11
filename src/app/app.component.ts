import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/users.service';
import { GenresService } from '../services/genres.service';
import { BrazilianStatesService } from '../services/brazilian-states.service';
import { GenresListResponse } from './types/gengers-list.response';
import { UsersListResponse } from './types/users-list-response';
import { StatesListResponse } from './types/states-list.response';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private _userService = inject(UserService);
  private _genresService = inject(GenresService);
  private _statesService = inject(BrazilianStatesService);
 
  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }
  
  onUserSelected(userIndex: number){
    const userFound = this.usersList[userIndex];
    if(userFound){
      this.userSelectedIndex = userIndex;
      //clona o objeto original inteiro, mesmo se for complexo
      this.userSelected = structuredClone(userFound);
    }
  }
  private getUsers() {
    this._userService.getUsers().subscribe((usersListResponse)=>{
      this.usersList = usersListResponse;
    });
  }
  private getGenres() {
    this._genresService.getGenrers().subscribe((genresListResponse)=>{
      this.genresList = genresListResponse;
    });
  }
  private getStates() {
    this._statesService.getStates().subscribe((statesListResponse)=>{
      this.statesList = statesListResponse;
    });
  }

}
