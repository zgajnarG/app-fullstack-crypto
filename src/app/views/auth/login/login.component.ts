import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'webfullstack-design-system';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData :FieldConfig[] = [{
    name: 'email',
    inputType: 'email',
    type: 'input',
    collections : [{
      key: "placeholder",
      value: "email"
    }]
  },
  {
    name: 'password',
    inputType: 'password',
    type: 'input',
    collections : [{
      key: "placeholder",
      value: "password"
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


  ngOnInit(): void {
  }

  onSubmit(event :any){
    console.log(event);
  }
}
