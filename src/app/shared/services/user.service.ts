import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userResponseVM } from '../models/user.response.vm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseURL = "http://localhost:8080/api/v1/userctrl"

  constructor(private httpClient : HttpClient) { }

  checklogin(userName: string, password: string): Observable<userResponseVM>{
    return this.httpClient.get<userResponseVM>(`${this.BaseURL}/checklogin/${userName}/${password}`)
  }
}
