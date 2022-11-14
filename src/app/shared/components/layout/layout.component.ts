import { Component, OnInit, } from '@angular/core';
import { SessionContext } from '../../context/session.service';

@Component({
  selector: 'rocket-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: any
  avatar: string = ""
  constructor(private sessionContext: SessionContext) { }

  ngOnInit(): void {
    this.sessionContext.getUser().subscribe(res => {
      this.user = res
      this.avatar = this.user?.name?.split("")[0]
    })
  }

}
