import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   getUser(){
    return this.http.get("https://rocketfy-pokemon.herokuapp.com/api/v1/auth/user?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5YWEUtczV0SXJqSWwxNUg4LXFZciIsImlhdCI6MTY2ODA1MzQ2MSwiZXhwIjoxNjY4MDUzNTQ3fQ.LN3kuq5umd8gUHiaNpXCjqgechdrYPusA5zggAcotRY")
   }
}
