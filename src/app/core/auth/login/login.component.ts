import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionContext } from 'src/app/shared/context/session.service';
import { UserService } from 'src/app/shared/services/user.service';

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
  constructor(private userService: UserService, private router: Router, private sessionContext: SessionContext) { }

  onSubmit(){
    this.userService.login(this.loginGroup.value).subscribe((res: any) => {
      if(res.code === 200){
        this.sessionContext.createSession(res.data)
        this.router.navigate(["/pokemon"])
      }
    })
  }
  ngOnInit(): void {
  }

}
