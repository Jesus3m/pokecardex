import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   getUser(token: string){
    return this.http.get(environment.apiUrl + "/auth/user?token="+token)
   }

   login(user: { user: string, pass: string}){
    return this.http.post(environment.apiUrl + "/auth/signin", user)
   }
   register(user: any){
    return this.http.post(environment.apiUrl + "/auth/register", user)
   }

}
