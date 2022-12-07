import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountUser} from "../models/AccountUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_SERVER_URL='http://localhost:8090/api/';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(user: AccountUser): Observable<AccountUser[]>
  {
    return this.httpClient.get<AccountUser[]>(`${this.API_SERVER_URL}/users`);
  }
}
