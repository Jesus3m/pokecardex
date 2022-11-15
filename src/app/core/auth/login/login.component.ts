import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionContext } from 'src/app/shared/context/session.service';
import { UserService } from 'src/app/shared/services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'rocket-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup = new FormGroup({
    user: new FormControl(""),
    pass: new FormControl("")
  })
  constructor(private userService: UserService, private router: Router, private sessionContext: SessionContext, private message: NzMessageService) { }

  onSubmit(){
    this.userService.login(this.loginGroup.value).subscribe((res: any) => {
      console.log(res)
      if(res.code === 200){
        this.message.success('Session stated')
        this.sessionContext.createSession(res.data)
        this.router.navigate(["/pokemon"])
      } else {
        this.message.error('User cant be sign in, try again')
      }
    })
  }
  ngOnInit(): void {
  }

}
