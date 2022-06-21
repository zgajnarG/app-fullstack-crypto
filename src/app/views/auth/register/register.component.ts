import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FieldConfig } from 'webfullstack-design-system';
import { RegisterEvent } from '../auth.interface';
import { Router } from '@angular/router';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  toastConfig = {
    open: false,
    message: '',
    color: 'green',
    duration: 5000,
  };

  formData: FieldConfig[] = [
    {
      name: 'email',
      inputType: 'email',
      type: 'input',
      collections: [
        {
          key: 'placeholder',
          value: 'Email',
        },
      ],
    },
    {
      name: 'password',
      inputType: 'password',
      type: 'input',
      collections: [
        {
          key: 'placeholder',
          value: 'Mot de passe',
        },
      ],
    },
    {
      name: 'confirm_password',
      inputType: 'password',
      type: 'input',
      collections: [
        {
          key: 'placeholder',
          value: 'Confirmer le mot de passe',
        },
      ],
    },
    {
      name: 'button',
      type: 'button',
      label: 'Créer le compte',
      collections: [
        {
          key: 'size',
          value: 'lg',
        },
      ],
    },
  ];
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(event: RegisterEvent) {
    if (event.password === event.confirm_password) {
      const data = { email: event.email, password: event.password };
      this.httpService
        .registerUser(data)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(
          (_) => {
            this.openToast('green', 'Votre compte a été créé avec succès');
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, this.toastConfig.duration);
          },
          (_) => {
            this.openToast('red', "Le mot de passe ou l'email est incorrect");
          }
        );
    } else {
      this.openToast('red', 'Les mots de passes ne sont pas les mêmes');
    }
  }

  openToast(color: string, message: string) {
    this.toastConfig.color = color;
    this.toastConfig.message = message;
    this.toastConfig.open = true;
  }

  onHideToast() {
    this.toastConfig.open = false;
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
