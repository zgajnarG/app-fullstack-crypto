export interface LoginEvent {
  email: string;
  password: string;
}

export interface RegisterEvent{
  email:string;
  password:string;
  confirm_password:string;
}
