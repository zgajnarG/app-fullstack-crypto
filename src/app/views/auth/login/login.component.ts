import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import User, { UserDatabase, UserRegister } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { FieldConfig } from 'webfullstack-design-system';
import { LoginEvent } from '../auth.interface';
import { loginUser } from 'src/app/store/user/user.actions';
import { Router } from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpService : HttpService , private store : Store, private router: Router ) {
  }

  formData :FieldConfig[] = [{
    name: 'email',
    inputType: 'email',
    type: 'input',
    collections : [{
      key: "placeholder",
      value: "Email"
    }]
  },
  {
    name: 'password',
    inputType: 'password',
    type: 'input',
    collections : [{
      key: "placeholder",
      value: "Mot de passe"
    }]
  },{
    name: 'button',
    type: 'button',
    label : 'Se Connecter',
    collections : [{
      key: "size",
      value: "lg"
    }]
    }
  ];


  toastConfig = {
    open : false,
    message : "",
    color : "green",
    duration : 5000
  }

  ngOnInit(): void {
  }

  onSubmit(event :LoginEvent){

    this.httpService.loginUser(event as UserRegister).pipe(takeUntil(this.destroyed$)).subscribe(data => {
      const result : Array<UserDatabase> = data as Array<UserDatabase>;
      if(result.length>0){
        const data :User = result[0] as unknown as User;
        this.store.dispatch(loginUser(data));
        this.router.navigate(['/home']);
      }else{
        this.openToast("red","Mot de passe ou email incorrect");
      }
    });
  }

  openToast(color:string, message:string){
    this.toastConfig.color = color;
    this.toastConfig.message = message;
    this.toastConfig.open = true;
  }

  onHideToast(){
    this.toastConfig.open=false;
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
