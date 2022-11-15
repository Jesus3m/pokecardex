import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionContext } from 'src/app/shared/context/session.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'rocket-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup = new FormGroup({
    name: new FormControl(""),
    lastName:new FormControl("") ,
    nickname: new FormControl(""),
    email: new FormControl("") ,
    password: new FormControl(""),
    team: new FormControl("")
  })
  constructor(private userService: UserService, private router: Router, private sessionContext: SessionContext) { }

  onSubmit(){
    this.userService.register(this.registerGroup.value).subscribe((res: any) => {
      if(res.code === 200){
        this.sessionContext.createSession(res.data)
        this.router.navigate(["/pokemon"])
      }
    })
  }
  ngOnInit(): void {
  }
}
