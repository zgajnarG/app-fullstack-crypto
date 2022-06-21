import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUser} from "../../store/user/user.selector";
import {disconnectUser} from "../../store/user/user.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(({isAuthenticated}) => this.isAuthenticated = isAuthenticated);
  }

  handleDisconnectUser(){
    this.store.dispatch(disconnectUser());
    this.router.navigate(['auth/login']);
  }

}
