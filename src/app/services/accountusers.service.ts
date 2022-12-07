import { Injectable } from '@angular/core';
import {AccountUser} from "../models/AccountUser";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountusersService {
  private API_SERVER_URL='http://localhost:8090/api/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<AccountUser[]>
  {
    return this.httpClient.get<AccountUser[]>(`${this.API_SERVER_URL}`);
  }

  deleteUser(id: number)
  {
    return this.httpClient.delete(`${this.API_SERVER_URL}/${id}`);
  }

  updateUser(id: number, accountUser: AccountUser)
  {
    return this.httpClient.put(`${this.API_SERVER_URL}/${id}`, accountUser);
  }
}
