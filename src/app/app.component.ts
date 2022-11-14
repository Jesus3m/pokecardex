import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionContext } from './shared/context/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sessionContext: SessionContext, private router: Router){}



  ngOnInit(): void {
    this.sessionContext.createSession().subscribe((res: any) => {
      if(res.id) {
        this.router.navigate(['pokemon'])
      } else{
        this.router.navigate(['/auth/login'])
      }
    })
  }

}
