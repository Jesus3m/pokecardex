import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SessionContext } from 'src/app/shared/context/session.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'rocket-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastName:new FormControl("", [Validators.required]) ,
    nickname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]) ,
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl(""),
    team: new FormControl("", [Validators.required])
  })
  constructor(private userService: UserService, private router: Router, private sessionContext: SessionContext, private message: NzMessageService) { }

  onSubmit(){
    if(this.registerGroup.valid){
      if((this.registerGroup.value.password !== this.registerGroup.value.confirmPassword)){
        return this.message.error("Password not equals")
      }
      return this.userService.register(this.registerGroup.value).subscribe((res: any) => {
        if(res.code === 200){
          this.sessionContext.createSession(res.data)
          this.router.navigate(["/pokemon"])
        }
      })
    } else {
      return this.message.error("Enter all user information")
    }
  }
  ngOnInit(): void {
  }
}
