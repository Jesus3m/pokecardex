import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';
@Injectable({
  providedIn: 'root'
})
export class SessionContext {
  private $session = new BehaviorSubject<any>({});
  private $user = new BehaviorSubject<any>({});
  constructor(private userService: UserService) {}

  createSession(session?: any) {
    if(session?.refreshToken){
      localStorage.setItem("refresh", session.refreshToken)
    }
    const token = localStorage.getItem('refresh') || session?.refreshToken
    token && this.userService.getUser(token).subscribe((res: any) => {
      this.$user.next(res.data)
    })
    this.$session.next(session);
    return this.$user.asObservable()
  }
  deleteSession(){
    localStorage.removeItem("refresh")
    this.$session.next(undefined)
    this.$user.next(null)
  }
  getUser(){
    return this.$user.asObservable()
  }
  getSession(){
    return this.$user.asObservable()
  }
  isAuthenticated(){
    return !!this.$user.getValue()?.id || this.$session.getValue()?.refreshToken
   }
}
