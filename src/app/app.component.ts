import { Component, OnInit } from '@angular/core';
import { SessionContext } from './shared/context/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sessionContext: SessionContext){}



  ngOnInit(): void {
    this.sessionContext.createSession()
  }

}
