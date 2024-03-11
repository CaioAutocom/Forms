import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersPlaceholderListResponse } from "../app/types/users-placeholder-list.response";

@Injectable({
    providedIn: 'root'
})
export class UsersPlaceholderService{
constructor(private _httpClient: HttpClient) { }
   
getUsersPlaceholder(): Observable<UsersPlaceholderListResponse> {
    return this._httpClient.get<UsersPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users');
}
}